const express = require("express");
const app = require("express")();
const server = require("http").createServer(app);
var cors = require("cors");

var io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

app.use(express.static("public"));

io.on("connection", (socket) => {
  //static id
  console.log("connection");
  const id = socket.handshake.query.id;
  console.log('room id', id)
  socket.join(id);

  socket.on("send-message", ({ ids, text }) => {
    console.log('ids', ids)
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
  socket.on("callUser", ({ usersToCall, signalData, from }) => {
    usersToCall.forEach((user) => {
      io.to(user.id).emit('hey', { signal: signalData, from })
    })
  })
  socket.on("acceptCall", (data) => {
    console.log('accepting call')
    io.to(data.to).emit('callAccepted', data.signal);
  })
});

server.listen(process.env.PORT || 5000);
