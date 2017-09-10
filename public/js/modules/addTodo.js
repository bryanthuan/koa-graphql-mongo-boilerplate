// Create a new list item when clicking on the "Add" button
import { $, $$ } from './bling';

function addTodo() {
   var li = document.createElement("li");
   var inputValue = $("#myInput").value;
   var t = document.createTextNode(inputValue);
   li.appendChild(t);
   if (inputValue === '') {
     alert("You must write something!");
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
 
 export default addTodo;