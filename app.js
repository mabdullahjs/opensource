let inputTodo = document.querySelector(`#inputTodo`);
let emtybtn = document.write(`#btn`)
let ol = document.querySelector(`ul`);
let arr = [];

function runTodo() {
    ol.innerHTML = "";

    if (inputTodo.value == "") {
        alert('Enter Your Task');
    } else {
        arr.push(inputTodo.value);
        console.log(arr);
        inputTodo.value = "";
    }

    for (let i = 0; i < arr.length; i++) {
        ol.innerHTML += `<li>${arr[i]}
        <span class="action"><button onclick="deletTodo(${i})">Delete</button> <button onclick=
        "editTodo(${i})">Edit</button></span>
        </li>`
    }



}


function deletTodo(index) {
    ol.innerHTML = "";
    console.log(`delete todo`, index)
    arr.splice(index, 1)

    for (let i = 0; i < arr.length; i++) {
        ol.innerHTML += `<li>${arr[i]}
        <span class="action"><button onclick="deletTodo(${i})">Delete</button> <button onclick=
        "editTodo(${i})">Edit</button></span>
        </li>`

    }
}

function editTodo(index) {
    ol.innerHTML = ""
    console.log(`edit todo`, index);
    // let updatedvalue = prompt("Enter Updated Value");
    let updatedvalue = `<input type="text" placeholder="updatedvalue">`;
    arr.splice(index, 1 , updatedvalue);

    for (let i = 0; i < arr.length; i++) {
        ol.innerHTML += `<li>${arr[i]}
        <span class="action"><button  onclick="deletTodo(${i})">Delete</button> <button class="btn2" onclick=
        "editTodo(${i})">Edit</button></span>
        </li>`

    }
}






