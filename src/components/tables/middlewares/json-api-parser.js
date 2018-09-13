const JSONAPIDeserializer = require('jsonapi-serializer').Deserializer;

const deserializeOption = {
  keyForAttribute: 'camelCase'
};

module.exports = async (ctx, next) => {
  ctx.request.body = await new JSONAPIDeserializer(deserializeOption)
    .deserialize(ctx.request.body);

  await next()
};

