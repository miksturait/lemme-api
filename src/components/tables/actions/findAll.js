const Table = require('../Table');
const tablesSerializer = require('../tables-serializer');

module.exports = async (ctx, next) => {
  const tables = await Table.find({});
  const payload = tablesSerializer.serialize(tables);
  ctx.body = payload

  await next();
};
