let box = document.getElementById("box");

window.onload = function() {
    document.getElementById("value").onkeyup = function(e) {
        if (e.keyCode == 13) {
            add();
        }
    }

    box.innerHTML = localStorage.getItem("todo");
}
window.onbeforeunload = function() {
    return "Are you sure you want to leave?";
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
    window.scrollTo(0, document.body.scrollHeight);
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
        e.target.parentNode.style.textDecoration = "line-through wavy #24bffb";
        e.target.parentNode.style.color = "pink";
        e.target.parentNode.style.fontWeight = "bold";
    }
    else{
        e.target.parentNode.style.textDecoration = "none";
        e.target.parentNode.style.color = "black";
        e.target.parentNode.style.fontWeight = "normal";
    }
}

function save() {
    if (confirm("Are you sure you want to save?")) {
        localStorage.setItem("todo", box.innerHTML);
    }
}


