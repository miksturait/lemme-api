const serializer = require('../serializers');

module.exports = async (ctx, next) => {
  ctx.body = serializer.serialize(ctx.request.body);

  await next()
};
