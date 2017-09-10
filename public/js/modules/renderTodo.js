// Create a new list item when clicking on the "Add" button
import {$, $$} from './bling';
import { removeTodo } from './mutationTodo';

function renderTodo({text, id, dismissed}) {
  var li = document.createElement("li");
  var t = document.createTextNode(text);
  li.appendChild(t);
  if (text === '') {
    Promise.reject("You must write something!");
  } else {
    $("#myUL").appendChild(li);
  }
  $("#myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.onclick = function () {
    if(!confirm("Are you sure ?")) return;
    var div = this.parentElement;
    removeTodo(div.getAttribute('data-id')).then(res => {
      div.style.display = "none";
    })
  
  }
  span.appendChild(txt);
  li.appendChild(span);
  li.setAttribute('data-id', id)
  if (dismissed) 
    li.classList.add('checked');
  }

export default renderTodo;