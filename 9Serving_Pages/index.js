import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, "Good Home", { "content-type": "text/html" });
    fs.readFile("./public/home.html", (error, data) => {
      if (error) throw error;
      res.end(data);
    });
  } else if (req.url === "/about") {
    res.writeHead(200, "Good Home", { "content-type": "text/html" });
    fs.readFile("./public/about.html", (error, data) => {
      if (error) throw error;
      res.end(data);
    });
  }
});

server.listen(8000, () => console.log("Server Up!"));
