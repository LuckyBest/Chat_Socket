const ConversationService = require("../service/Conversation-service");

class ConversationController {
    async getConversationData(conversationId) {
        try{
            const conversation = await ConversationService.getConversation(conversationId); 
            return conversation;
        }catch(e){
            console.log(e);
        }
    }
}

module.exports = ConversationController;