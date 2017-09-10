import axios from 'axios';

function addTodo(text = '') {
   if(!text) return Promise.reject();
   let configJson = {
      url: '/graphql',
      method: 'POST', 
      data: {
         query: `
         mutation ($text: String!) {
            addTodo(text: $text) {              
               id            
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

function dismissTodo(id = '') {
   if(!id) return Promise.reject();
   let configJson = {
      url: '/graphql',
      method: 'POST', 
      data: {
         query: `
         mutation ($id: ID!) {
            toggleDismiss(id: $id) {  
               id            
               text
               dismissed
               createdAt
               updatedAt
            }
          }         
         `,
         variables: {id}
      }
   };
   return axios(configJson).then(({data})=> {
      if(!data) return Promise.reject();
      return data;
   });
}

function removeTodo(id = '') {
  if(!id) return Promise.reject();
  let configJson = {
     url: '/graphql',
     method: 'POST', 
     data: {
        query: `
        mutation ($id: ID!) {
           removeTodo(id: $id) {  
              id            
              text
           }
         }         
        `,
        variables: {id}
     }
  };
  return axios(configJson).then(({data})=> {
     if(!data) return Promise.reject();
     return data;
  });
}

module.exports = { addTodo, dismissTodo, removeTodo };