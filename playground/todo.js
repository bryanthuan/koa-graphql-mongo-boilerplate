const Koa = require('koa');
const Router = require('koa-router'); // koa-router@7.x
const graphqlHTTP = require('koa-graphql');
const graphql = require('graphql');
const app = new Koa();
const router = new Router();
const axios = require('axios');

const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLID, 
    GraphQLInt, 
    GraphQLBoolean,
    GraphQLNonNull
} = graphql;

const {
    GraphQLDate,
    GraphQLTime,
    GraphQLDateTime
  } = require('graphql-iso-date');

const TodoType = new GraphQLObjectType({
    name: 'Todo',
    fields: {
        id: {
            type: GraphQLID
        },
        text: {
            type: GraphQLString
        },
        dismissed: {
            type: GraphQLBoolean
        },
        createdAt: {
            type: GraphQLDateTime
        },
        updatedAt: {
            type: GraphQLDateTime
        }
    }

});

const RootQuery = new GraphQLObjectType({
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

const mutation = new GraphQLObjectType({
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


var schema = new graphql.GraphQLSchema({query: RootQuery, mutation});

router.get('/', async(ctx, next) => {
    console.log('ip:', ctx.request.ip);
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
}, (ctx, next) => {
    ctx.body = 'Hello Todo!';
}).all('/graphql', graphqlHTTP({schema: schema, graphiql: true}));

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});