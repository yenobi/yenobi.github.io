const http = require('http');
const path = require('path');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
    let filePath = '.' + req.url;
    
    if (filePath === './') {
        filePath = './index.html'
    }

    const extname = path.extname(filePath);
    let contentType;
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;      
        case '.jpg':
            contentType = 'image/jpg';
            break;
        default:
            contentType = 'text/html';
    }

    fs.readFile(filePath, (err, content) => {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf-8');
    })    
}).listen(port);

console.log(`Server is running on http://127.0.0.1:${port}`);
