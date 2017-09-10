const Koa = require('koa');
const Router = require('koa-router');
const graphqlHTTP = require('koa-graphql');
const schema = require('../schema');

const router = new Router();

router.get('/', async(ctx, next) => {
   console.log('ip:', ctx.request.ip);
   const start = Date.now();
   await next();
   const ms = Date.now() - start;
   console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
}, (ctx, next) => {
   ctx.body = 'Hello Todo!';
})
.all('/graphql', graphqlHTTP({schema: schema, graphiql: true}));


module.exports = router;