const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const { create, findAll } = require('./actions')

const router = new Router();

router.get('/api/v1/tables',
  findAll
);

router.post('/api/v1/tables',
  bodyParser(),
  create
);

module.exports = router;
