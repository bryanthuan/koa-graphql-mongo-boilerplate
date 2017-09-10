### Description

The goal of this test is to create a simple node.js application that works as a to-do list. 

This application should allow to:

- Create a new to-do element
- Retrieve the list of to-do elements
- Update a to-do element to dismiss it

Notes:

- No access control
- A to-do element is composed by: 
    - createdAt
    - updatedAt
    - text
    - dismissed (default false)

### Technical Specifications :

- Use the latest version of `koa`
- Use `GraphQL` for you API
- Use the latest version of `MongoDB`
- Add `GraphiQL` on your project to allow testing the queries with ease
- Provide the `GraphQL` queries needed to execute each one of the operations requested

### TODO:

- Refactor use Typescript
- Provide configuration to run your application in docker
- Add pagination to the list of questions and answers
- Provide the queries to filter / order the list of questions / answers
- Use DynamoDB instead of MongoDB