const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
let apiHandler;
try {
  apiHandler = require('./api/index.js');
} catch (e) {
  apiHandler = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ ok: true, mode: 'standalone' }));
  };
}

const requestHandler = (req, res) => {
  // 1. API routes
  if (req.url === '/api' || req.url.startsWith('/api/') || req.url.startsWith('/api?')) {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        req.body = body ? JSON.parse(body) : {};
      } catch (e) {
        req.body = {};
      }
      return apiHandler(req, res);
    });
    return;
  }

  // 2. Health check endpoint for Antideploy
  if (req.url === '/health' || req.url === '/ping') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', uptime: process.uptime() }));
    return;
  }

  // 3. Static files & SPA fallback
  const requestedFile = req.url.split('?')[0];
  const filePath = requestedFile === '/' ? path.join(__dirname, 'index.html') : path.join(__dirname, requestedFile);

  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isFile()) {
      const ext = path.extname(filePath);
      const mimeTypes = {
        '.html': 'text/html; charset=utf-8',
        '.js': 'application/javascript; charset=utf-8',
        '.json': 'application/json; charset=utf-8',
        '.css': 'text/css; charset=utf-8',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.svg': 'image/svg+xml'
      };
      res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
    } else {
      // SPA Fallback: serve index.html for clean client-side routing
      const indexPath = path.join(__dirname, 'index.html');
      fs.readFile(indexPath, (readErr, htmlData) => {
        if (readErr) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('Not Found');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end(htmlData);
        }
      });
    }
  });
};

const server = http.createServer(requestHandler);

// Only listen if executed directly (e.g. node server.js on Antideploy or local terminal)
if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`[Antideploy] Tapri Game server running on port ${PORT}`);
  });
}

// Export handler for Vercel Serverless Function compatibility
module.exports = requestHandler;
