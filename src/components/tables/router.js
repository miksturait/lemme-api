const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const { create, destroy, findAll, update } = require('./actions');
const { create: createValidator } = require('./validators');
const {
  jsonApiParser,
  serialize,
  validate
} = require('./middlewares');

const router = new Router();

router.get('/api/v1/tables',
  findAll,
  serialize
);

router.post('/api/v1/tables',
  bodyParser(),
  jsonApiParser,
  validate(createValidator),
  create,
  serialize
);

router.delete('/api/v1/tables/:id',
  destroy
);

router.put('/api/v1/tables/:id',
  bodyParser(),
  jsonApiParser,
  update,
  serialize
);

module.exports = router;
