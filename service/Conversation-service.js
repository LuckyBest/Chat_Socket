const ConversationModel= require("../model/conversation-model");

class ConversationService {
    async getConversation(id){
        try{
            const conversation = await ConversationModel.findOne({conversationId: id});
            return conversation;
        }catch(e){
            return e; 
        }
    }
};

module.exports = new ConversationService();