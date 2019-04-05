
let list;
let addBtn;
let taskInput;
function addItem(text) {
    let item = document.createElement('li');
    let textEl = document.createTextNode(text);
    item.appendChild(textEl);

    let removeEl = document.createElement('span');
    let removeElText = document.createTextNode('\u00D7');
    removeEl.appendChild(removeElText);
    removeEl.className = 'remove';
    removeEl.addEventListener('click', function () {
        list.removeChild(item);
    });
    item.appendChild(removeEl);

    item.addEventListener('click', function () {
        item.classList.toggle('checked');
    });
    list.appendChild(item);
}




window.addEventListener('DOMContentLoaded', function (event) {


    list = document.getElementById('myList');
    addBtn = document.getElementById('addBtn');
    taskInput = document.getElementById('taskInput');


    console.log(list);
    addBtn.addEventListener('click', function () {
        console.log('Button has been clicked');
        // addItem('')
        if (taskInput.value !== '') {

            addItem(taskInput.value);
        }
        taskInput.value = '';
    })
    addItem('Hit the gym');
    addItem('Pay bills');

    taskInput.addEventListener('keyup', function (event) {
        if (event.keyCode === 13) {
            addBtn.click();
        }
    });
});

