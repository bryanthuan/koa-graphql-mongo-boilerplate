const Koa = require('koa');
const Router = require('koa-router');
const graphqlHTTP = require('koa-graphql');
const schema = require('../schema');

const router = new Router();

router.get('/', async(ctx, next) => {
   ctx.body = 'Hello Todo!';
});

router.all('/graphql', graphqlHTTP({schema: schema, graphiql: true}));

module.exports = router;