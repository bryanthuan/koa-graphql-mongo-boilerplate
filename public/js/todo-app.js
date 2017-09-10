import '../css/style.css';

import { $, $$ } from './modules/bling';
import renderTodo from './modules/renderTodo';
import { addTodo, dismissTodo } from './modules/mutationTodo';
import moment from 'moment';
import queryTodos from './modules/queryTodos';

queryTodos().then(({data}) => {
  if(!data['todos']) return Promise.reject();
  data['todos'].forEach(item => {
    renderTodo(item);
  })
});

// Add a "checked" symbol when clicking on a list item
var list = $$('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {    
    dismissTodo(ev.target.getAttribute('data-id')).then(({ data }) => {
      console.log(data);
      const { updatedAt, createdAt } = data.toggleDismiss;
      var fromNow = updatedAt ? moment(updatedAt).startOf('hour').fromNow() : moment(createdAt).startOf('hour').fromNow();
      var time = document.createTextNode(fromNow);
      ev.target.children[1].replaceChild(time,ev.target.children[1].firstChild);
      ev.target.classList.toggle('checked');
    });
    
  }
}, false);

$('.addBtn').on('click',() => {
  if($("#myInput").value ==='') {
    alert('You must write something');
    return;
  }
  addTodo($("#myInput").value).then(({data}) => {
    if(!data.addTodo) {
      throw new Error('Empty element from server');
    }
    renderTodo(data.addTodo);
  });
});

$("#myInput").on('keydown', (e) => {
  if(e.keyCode !== 13) return;
  if(e.target.value ==='') {
    alert('You must write something');
    return;
  }
  addTodo(e.target.value).then(({data}) => {
    if(!data.addTodo) {
      throw new Error('Empty element from server');
    }
    renderTodo(data.addTodo);
  });

});


