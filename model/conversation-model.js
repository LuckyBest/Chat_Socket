const mongoose = require("mongoose");

const ConversationModel = new mongoose.Schema(
  {
    members: {
      type: Array,
    },
    socketId: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Conversation", ConversationModel);
