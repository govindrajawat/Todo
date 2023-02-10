let box = document.getElementById("box");

window.onload = function() {
    document.getElementById("value").onkeyup = function(e) {
        if (e.keyCode == 13) {
            add();
        }
    }

    box.innerHTML = localStorage.getItem("todo");
}

function add(){
    let name = document.getElementById("value").value;
    if(name == ""){
        document.getElementById("error").innerHTML = "Please enter a To-Do item";
        return;
    }
    else{
        document.getElementById("error").innerHTML = "";
        let li = document.createElement("li");
        li.setAttribute("class", "todo");
        li.innerHTML = name;

        let check = document.createElement("input");
        check.setAttribute("type", "checkbox");
        check.setAttribute("class", "check");
        check.setAttribute("onclick", "check(event)");
        li.appendChild(check);
            
        let button = document.createElement("button");
        button.setAttribute("class", "delete");
        button.setAttribute("onclick", "deleteItem(event)");
        button.innerHTML = "Delete";
        li.appendChild(button);


        box.appendChild(li);
    }
    document.getElementById("value").value = "";
    document.getElementById("value").focus();
}
function deleteItem(e){
    e.target.parentNode.remove();
}
function clearAll(){
    if (confirm("Are you sure you want to clear all items?")) {
        box.innerHTML = "";
    }
    else{
        return;
    }
}
function check(e){
    if(e.target.checked){
        e.target.parentNode.style.textDecoration = "line-through";
        e.target.parentNode.style.color = "red";
        e.target.parentNode.style.fontWeight = "bold";
        e.target.parentNode.style.opacity = "0.5";
    }
    else{
        e.target.parentNode.style.textDecoration = "none";
        e.target.parentNode.style.color = "black";
        e.target.parentNode.style.fontWeight = "normal";
        e.target.parentNode.style.opacity = "1";
    }
}

function save() {
    if (confirm("Are you sure you want to save?")) {
        localStorage.setItem("todo", box.innerHTML);
    }
}