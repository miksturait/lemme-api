const Joi = require('joi');

module.exports = (schema) => {
  return async (ctx, next) => {
    const result = Joi.validate(ctx.request.body, schema, { stripUnknown: false });

    if (result.error) {
      ctx.body = result.error;
      ctx.status = 422;
    } else {
      await next();
    }
  };
}
