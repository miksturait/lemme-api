const Joi = require('joi');
const Table = require('../Table');
const tablesSerializer = require('../tables-serializer');
const JSONAPIDeserializer = require('jsonapi-serializer').Deserializer;

const tableCreateSchema = Joi.object().keys({
  seatsCount: Joi.number().min(1).max(30).required(),
  name: Joi.string().required()
});

module.exports = async (ctx, next) => {
  const deserializeOption = {
    keyForAttribute: 'camelCase'
  };
  const payload = await new JSONAPIDeserializer(deserializeOption)
    .deserialize(ctx.request.body);
  const result = Joi.validate(payload, tableCreateSchema, { stripUnknown: true });

  if (result.error) {
    ctx.body = result.error;
    ctx.status = 422;
  } else {
    const newTable = await Table.create(payload);
    const response = tablesSerializer.serialize(newTable);
    ctx.body = response
  }

  await next();
}
