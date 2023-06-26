const http = require ('http')

const hostname = 'localhost'
const port = 3000

http.createServer ((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Galvinize!');
}).listen(port, hostname, () => {
    console.log(`Server is running on ${hostname}:${port}`);
});