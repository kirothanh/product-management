const Chat = require("../../models/chat.model");
const User = require("../../models/user.model");

const chatSocket = require("../../sockets/client/chat.socket")

// [GET] /chat/:roomChatId
module.exports.index = async (req, res) => {
  try {
    const roomChatId = req.params.roomChatId;
  
    // SocketIO
    chatSocket(req, res)
    // End SocketIO

    // Lay ra data
    const chats = await Chat.find({
      room_chat_id: roomChatId,
      deleted: false
    })

    for(const chat of chats) {
      const infoUser = await User.findOne({
        _id: chat.user_id
      }).select("fullName");

      chat.infoUser = infoUser
    }

    res.render("client/pages/chat/index.pug", {
      pageTitle: "Chat",
      chats: chats
    });
  } catch (error) {
    console.log(error);
  }
  
}