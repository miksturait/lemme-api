const Table = require('./model');

const findAll = async () => {
  return await Table.find({});
};

const createTable = async (attributes) => {
  return await Table.create(attributes);
};

const updateTable = async (id, ctx) => Table.findByIdAndUpdate(id, ctx);

const destroyTable = async (id) => {
  return await Table.findOneAndDelete(id);
};


module.exports = {
  findAll,
  createTable,
  destroyTable,
  updateTable
};
