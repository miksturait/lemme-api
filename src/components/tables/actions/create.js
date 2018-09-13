const Table = require('../model');
const tablesSerializer = require('../tables-serializer');

module.exports = async (ctx, next) => {
  const newTable = await Table.create(ctx.request.body);
  const response = tablesSerializer.serialize(newTable);

  ctx.body = response;

  await next();
}
