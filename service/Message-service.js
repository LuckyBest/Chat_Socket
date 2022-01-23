const MessageModel = require("../model/message-model.js");

class MessageService {
  static async saveMessage(messageData) {
    const message = await MessageModel.create(messageData);
    return message;
  }

  static async getMessage() {}
}

module.exports = MessageService;
