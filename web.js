"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mime = require('mime');
var url = require('url');
var fs = require('fs');
var http = require('http');
var server = http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname;
    // console.log(pathname)
    if (pathname.endsWith('/')) {
        pathname += 'index.html';
    }
    else {
        if (!pathname.includes('.')) {
            response.writeHead(301, { 'Location': pathname + '/' + (url.parse(request.url).search || "") });
        }
        response.end();
        return;
    }
    fs.stat('.' + pathname, function (err, stats) {
        if (!err && stats.isFile()) {
            fs.readFile('.' + pathname, function (err, html) {
                if (!err) {
                    response.writeHead(200, { 'Content-Type': mime.getType(pathname) });
                    response.write(html);
                    response.end();
                }
            });
        }
        else {
            response.writeHead(404);
            response.write("Not Found");
            response.end();
        }
    });
    // var html = fs.readFileSync('./index.html');
    // // response.write("<h1>hello world</h1>")
    // response.write(html);
    // response.end();
});
server.listen(3000, '127.0.0.1');
