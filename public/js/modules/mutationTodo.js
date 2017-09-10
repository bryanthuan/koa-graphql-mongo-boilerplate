import axios from 'axios';

function addTodo(text = '') {
   let configJson = {
      url: '/graphql',
      method: 'POST', 
      data: {
         query: `
         mutation ($text: String!) {
            addTodo(text: $text) {              
              text
              dismissed
              createdAt
            }
          }         
         `,
         variables: {text}
      }
   };
   return axios(configJson).then(({data})=> {
      if(!data) Promise.reject;
      return data;
   });
}

module.exports = { addTodo };