const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString
} = require('graphql');
const { TodoType } = require('./types');


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
            var newTodo = {
              text,
              dismissed: false,
              createdAt: new Date()
            };              
            return axios.post('http://localhost:3000/todos', newTodo)
              .then(res => res.data);
          }
      }
  }
});
