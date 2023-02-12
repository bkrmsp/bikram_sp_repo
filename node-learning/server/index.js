const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<!DOCTYPE html>');
        res.write('<html><head><title>My page</title></head>');
        res.write('<body><form method="POST" action="/submit"><input type="text" name="message" /><button type="submit">Submit</button></form></body></html>');
        res.end();
        return;
    }
    if (req.url === '/submit') {
        console.log('submit req')
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        })
        return req.on('end', () => {
            console.log('on end')
            const parsedBody = Buffer.concat(body).toString();
            console.log('parsedBody', parsedBody)
            const content = parsedBody.split('=')[1];
            console.log('content', content)
            fs.writeFile('message.txt', content, (err) => {
                res.statusCode = 302
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
});

server.listen(3000);