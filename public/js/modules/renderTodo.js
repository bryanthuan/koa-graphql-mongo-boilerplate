// Create a new list item when clicking on the "Add" button
import {$, $$} from './bling';
import { removeTodo } from './mutationTodo';
import moment from 'moment';


function renderTodo({text, id, dismissed, createdAt, updatedAt}) {
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
      if(!confirm("Are you sure you want to delete ?")) return;
      var div = this.parentElement;
      removeTodo(div.getAttribute('data-id')).then(res => {
        div.style.display = "none";
      })
    
    }
    span.appendChild(txt);
    li.appendChild(span);
    var i = document.createElement("i");
    var fromNow = updatedAt ? moment(updatedAt).startOf('hour').fromNow() : moment(createdAt).startOf('hour').fromNow();     
    var time = document.createTextNode(fromNow);
    i.appendChild(time);
    li.appendChild(i);
    // Set data attribute
    li.setAttribute('data-id', id)
    if (dismissed) 
      li.classList.add('checked');
  }

export default renderTodo;