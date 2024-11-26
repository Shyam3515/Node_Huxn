import http from "http";

http
  .createServer((req, res) => {
    // console.log(req,res)
    // res.setHeader('Content-Type', 'text/html')

    // shorthand for status (code, message & header)
    res.writeHead(202, "Good", { "Content-Type": "text/plain" });
    res.write("<h1>Hello from Nodejs</h1>");
  })
  .listen(8000, () => console.log("server created!"));
