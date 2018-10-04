const Chat = require('./model');

const findAll = async () => {
  return await Chat.find({});
};

const createChat = (attributes) => Chat.create(attributes);

const updateChat = (id, ctx) => Chat.findByIdAndUpdate(id, ctx);

const destroyChat = async (id) => {
  return await Chat.findOneAndDelete(id);
};


module.exports = {
  findAll,
  createChat,
  destroyChat,
  updateChat
};
