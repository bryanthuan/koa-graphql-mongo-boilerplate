const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString
} = require('graphql');
const { TodoType } = require('./types');
const mongoose = require('mongoose');
const Todo = mongoose.model('Todo');

exports.mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
      addTodo: {
          type: TodoType,
          description: 'Add a Todo',
          args: {
            text: {
              name: 'Todo title',
              type: new GraphQLNonNull(GraphQLString)
            }
          },
          resolve: (parentValue, {text}) => {            
            const todo = new Todo({
              text,
            });              
            return todo.save()
              .then(res => res);
          }
      }
  }
});
