console.log(process.env.MODE);
const { Server } = require("socket.io");
const { createServer } = require("http");
const port = process.env.PORT || 3000;
const { generatorFunc } = require("./utils/gameUtils");

const httpServer = createServer((req, res) => {
  if (process.env.MODE === "development") {
    console.log(req.url, req.method);
  }
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: generatorFunc(), code: 200 }));
  } else {
    res.writeHead(404, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "not found", code: 404 }));
  }
}).listen(port, () => {
  console.log(`Server started on port ${port}`);
});
