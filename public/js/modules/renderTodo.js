// Create a new list item when clicking on the "Add" button
import { $, $$ } from './bling';

function renderTodo(inputValue='', ) {
   var li = document.createElement("li");
   var t = document.createTextNode(inputValue);
   li.appendChild(t);
   if (inputValue === '') {
     Promise.reject("You must write something!");
   } else {
     $("#myUL").appendChild(li);
   }
   $("#myInput").value = "";
 
   var span = document.createElement("SPAN");
   var txt = document.createTextNode("\u00D7");
   span.className = "close";
   span.appendChild(txt);
   li.appendChild(span);
 
   for (let i = 0; i < close.length; i++) {
     close[i].onclick = function() {
       var div = this.parentElement;
       div.style.display = "none";
     }
   }
 }
 
 export default renderTodo;