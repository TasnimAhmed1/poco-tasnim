list = document.getElementById('myList');
addBtn = document.getElementById('addBtn');
taskInput = document.getElementById('taskInput');

function addItem(text) {

    let item = document.createElement('li');
    item.innerText = text;

    item.addEventListener('click', function () {
        item.classList.toggle('checked');
    });

    let removeButton = document.createElement('span');
    removeButton.className = 'remove';
    removeButton.innerText = 'X';

    removeButton.addEventListener('click',function(){
        item.remove();

        // list.removeChild(item);
    });

    item.appendChild(removeButton);

    addBtn.addEventListener('click', function(){
        if(taskInput.value !== '' ){
            addItem(taskInput.value);
        }
        
    });

    list.appendChild(item);
}
    for (let i = 0; i < 5; i++) {

        addItem(faker.name.findName());
    }
    



