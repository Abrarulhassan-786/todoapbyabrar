var toDoList = document.getElementById("toList");
var array = [];
var todolist = localStorage.getItem("to-do-list");
console.log(todolist);
if (todolist) {
    array = JSON.parse(todolist);
}
else {
    alert("Sorry! Not found any Data.")
}
function loadAlltodo() {
    toDoList.innerHTML = "";
    for (var i = 0; i < array.length; i++) {
        var li = `
        <div id="containerStyle">
        <div id="mainlist">
        <li> ${array[i]}       
        </li>
        </div>
        <div id="btnfunct">
        <button class="btn" onclick = "delOne('${i}')"><i class="fa fa-remove"></i></button> 
        <button class="btn" onclick = "editTodo('${array[i]}','${i}')"><i class="fa fa-edit"></i></button> 
        </div>
        </div>`;
        toDoList.innerHTML += li;
    }
}
loadAlltodo();

function addList() {
    var input = document.getElementById("text");
    if (input.value.trim() !== "") {
        var li = `
        <div id="containerStyle">
        <div id="mainlist">
        <li> ${input.value} </li>
        </div>
        <div id="btnfunct">
        <button class="btn" onclick = "delOne('${array.length}')"><i class="fa fa-remove"></i></button> 
        <button class="btn" onclick = "editTodo('${input.value}','${array.length}')"><i class="fa fa-edit"></i></button> 
        </div>
        </div>`;
        array.push(input.value);
        localStorage.setItem("to-do-list", JSON.stringify(array));
        toDoList.innerHTML += li;
        input.value = "";
        input.focus();
    }
    else {
        alert("You Can Not Left Input Empty!")
    }
}

function removeAll() {
    toDoList.innerHTML = "";
    //localStorage.clear();
    localStorage.removeItem("to-do-list");
}


function delOne(i) {
    array.splice(i, 1);
    localStorage.setItem("to-do-list", JSON.stringify(array));
    event.target.parentNode.remove();
    loadAlltodo();
}

function editTodo(a, i) {
    var oldVlaue = prompt("Enter Updated Value ", a);
    if (oldVlaue) {
        array.splice(i, 1, oldVlaue);
        localStorage.setItem("to-do-list", JSON.stringify(array));
        event.target.getElementById("containerStyle").firstChild.parentNode.nodeValue = oldVlaue;   
    }
}