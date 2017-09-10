const graphql = require('graphql');

const { query } = require('./query');
const { mutation } = require('./mutation');

const schema = new graphql.GraphQLSchema({
    query,
    mutation
});

module.exports = schema;