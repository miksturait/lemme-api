const { updateChat } = require('../DAL');

module.exports = async (ctx, next) => {
  try {
    await updateChat(ctx.request.id, ctx.request.body);
  } catch(e) {
    ctx.body = { errors: e }
  }

  await next();
};
