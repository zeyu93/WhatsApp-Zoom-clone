const app = require("express")();
const server = require("http").createServer(app);

const io = require("socket.io")(server);

io.on("connection", (socket) => {
  //static id
  const id = socket.handshake.query.id;
  socket.join(id);
});

server.listen(5000);
