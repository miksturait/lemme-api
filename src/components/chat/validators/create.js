const Joi = require('joi');

module.exports =  Joi.object().keys({
  seatsCount: Joi.number().min(1).max(30).required(),
  name: Joi.string().required()
});
