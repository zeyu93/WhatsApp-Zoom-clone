const app = require("express")();
const server = require("http").createServer(app);
var cors = require("cors");
var io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  //static id
  console.log("connection");
  const id = socket.handshake.query.id;
  socket.join(id);

  socket.on("send-message", ({ ids, text }) => {
    ids.forEach((recipient) => {
      const newids = ids.filter((r) => r != recipient);
      newids.push(id);
      socket.broadcast.to(recipient).emit("receive-message", {
        ids: newids,
        text,
        sender: id,
      });
    });
  });
});

server.listen(5000);
