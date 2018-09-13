const Table = require('./model');

const findAll = async () => {
  return await Table.find({});
};

const createTable = async (attributes) => {
  return await Table.create(attributes);
};


module.exports = {
  findAll,
  createTable
};
