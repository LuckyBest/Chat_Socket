require("dotenv").config();
const PORT = process.env.PORT || 8900;
const io = require("socket.io")(PORT, {
  cors: {
    origin: process.env.CLIENT_URL,
  },
});
const mongoose = require("mongoose");
const ConversationController = require("./controller/Conversation-controller.js");
const MessageController = require("./controller/Messages-controller.js");
const MessageControllerInstance = new MessageController();
const ConversationControllerInstance = new ConversationController();

io.on("connection", async (socket) => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    socket.on("sendMessage", async (data) => {
      const { socketId } = await ConversationControllerInstance.getConversationData(data.conversationId);
      io.emit("getMessage", await MessageControllerInstance.saveMessage(data));
    });

  } catch (e) {
    console.log(e);
  }
});
