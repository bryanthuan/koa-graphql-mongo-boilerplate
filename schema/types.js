const graphql = require('graphql');
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



exports.TodoType = new GraphQLObjectType({
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

