const Table = require('./model');

const findAll = async () => {
  return await Table.find({});
};

const createTable = async (attributes) => {
  return await Table.create(attributes);
};

const destroyTable = async (id) => {
  return await Table.findByIdAndRemove(id);
};

module.exports = {
  findAll,
  createTable,
  destroyTable
};
