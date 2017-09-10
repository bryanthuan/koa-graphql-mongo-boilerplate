const Koa = require('koa');
const Router = require('koa-router'); // koa-router@7.x
const graphqlHTTP = require('koa-graphql');
const mongoose = require('mongoose');

const routes = require('./routes/index');

const app = new Koa();
app
.use(routes.routes())
.use(routes.allowedMethods());

module.exports = app;