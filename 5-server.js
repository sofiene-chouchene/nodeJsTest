const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcom home page");
  }
  if (req.url === "/about") {
    res.end("about page");
  } else {
    res.end(`<h1>oops</h1>
    <a href="/">back</a>`);
  }
});
server.listen(5000);
