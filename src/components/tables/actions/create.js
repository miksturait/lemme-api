const { range } = require('lodash');
const { createTable } = require('../DAL');

module.exports = async (ctx, next) => {
  const { body: params } = ctx.request;
  const { seatsCount } = params;

  params.seats = range(seatsCount)
    .map(() =>{
      return {
        status: false
      }
    });

  ctx.request.body = await createTable(params);

  await next();
}
