
const mongoose = require('mongoose');
const Todo = mongoose.model('Todo');
const graphql = require('graphql');

const { TodoType } = require('./types');

exports.query = new graphql.GraphQLObjectType({
   name: 'RootQueryType',
   fields: {
       todos: {
           type: new graphql.GraphQLList(TodoType),
           resolve() {
               return Todo.find().then(res=>res);
           }
       }
   }
});