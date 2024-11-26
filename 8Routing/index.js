import http from "http";

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.end("<h1>Hello from Nodejs</h1>");
    } else if (req.url === "/about") {
      res.end("<h1>Hello About</h1>");
    } else if (req.url === "/contact") {
      res.end("<h1>Hello Contact</h1>");
    } else {
      res.end("<h1> 404! Page not Found :(</h1>");
    }
  })
  .listen(8001, () => {
    console.log("Server is Up!");
  });
