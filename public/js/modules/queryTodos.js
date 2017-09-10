import axios from 'axios';

function queryTodos() {
   let configJson = {
      url: '/graphql',
      method: 'POST', 
      data: {
         query: `
         query Todo {
            todos {
              text
              dismissed
              createdAt
              updatedAt
            }
          }          
         `
      }
   };
   return axios(configJson).then(({data})=> {
      if(!data) Promise.reject;
      return data;
   });
}

export default queryTodos;