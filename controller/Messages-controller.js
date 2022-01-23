const MessageService = require("../service/Message-service");

class MessageController {
  async saveMessage(socket) {
    try {
      const message = await MessageService.saveMessage(socket);
      return message;
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = MessageController;
