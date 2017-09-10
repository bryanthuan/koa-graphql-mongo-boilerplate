
const graphql = require('graphql');

const { TodoType } = require('./types');

exports.query = new graphql.GraphQLObjectType({
   name: 'RootQueryType',
   fields: {
       todos: {
           type: new graphql.GraphQLList(TodoType),
           resolve() {
               return axios.get('http://localhost:3000/todos')
               .then(res=> res.data);
           }
       }
   }
});