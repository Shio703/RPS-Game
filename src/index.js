const io = require("socket.io")(3000);
console.log(process.env.MODE);

io.on("connection", (socket) => {
  socket.emit("connection", "connection established!");
});
