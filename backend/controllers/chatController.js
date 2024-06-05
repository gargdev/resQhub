const Chat = require('../models/Chat');

exports.getChats = async (req, res) => {
  const { agencyId } = req.params;
  try {
    const chats = await Chat.find({ participants: agencyId }).populate('participants messages.sender');
    res.status(200).json(chats);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.sendMessage = async (req, res) => {
  const { chatId } = req.params;
  const { senderId, content } = req.body;
  try {
    const chat = await Chat.findById(chatId);
    chat.messages.push({ sender: senderId, content });
    await chat.save();
    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
