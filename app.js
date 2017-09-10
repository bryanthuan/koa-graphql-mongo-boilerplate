const Koa = require('koa');
const Router = require('koa-router'); // koa-router@7.x
const graphqlHTTP = require('koa-graphql');
const mongoose = require('mongoose');
const views = require('koa-views');
const routes = require('./routes/index');
const pug = require('pug');
const path = require('path');
const app = new Koa();
const serve = require('koa-static');


app.use(views(__dirname + '/views/', { extension: 'pug', map: {pug: 'pug' }}));

app.use(serve('public/'));
app
.use(routes.routes())
.use(routes.allowedMethods());

module.exports = app;