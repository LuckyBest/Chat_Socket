require("dotenv").config();
const PORT = process.env.PORT || 8900;
const io = require("socket.io")(PORT, {
  cors: {
    origin: process.env.CLIENT_URL,
  },
});
const mongoose = require("mongoose");
const MessageController = require("./controller/Messages-controller.js");
const MessageControllerInstance = new MessageController();

io.on("connection", async (socket) => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    socket.on("message", MessageControllerInstance.saveMessage);
  } catch (e) {
    console.log(e);
  }
});
