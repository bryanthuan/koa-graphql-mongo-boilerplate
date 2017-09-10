const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID
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
      },
      dismiss: {
        type: TodoType,
        description: 'Dismiss a todo task',
        args: {
          id: {
            name: 'Todo Id',
            type: new GraphQLNonNull(GraphQLID)
          }
        },
        resolve: (parentValue, {id}) => {
          const changedTodo = {
            dismissed: true,
            updatedAt: new Date()
          }
          return Todo.findOneAndUpdate({
            _id: id
        }, { $set: changedTodo }, { new: true })
         .then(todo => todo);
        }
      }
    }
});
