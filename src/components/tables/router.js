const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const JSONApiParser = require('./middlewares/JSONApiParser');
const { create, findAll } = require('./actions');
const { create: createValidator } = require('./validators');
const validate = require('./middlewares/validate');

const router = new Router();

router.get('/api/v1/tables',
  findAll
);

router.post('/api/v1/tables',
  bodyParser(),
  JSONApiParser,
  validate(createValidator),
  create
);

module.exports = router;
