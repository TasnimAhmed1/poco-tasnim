let inputBox = document.getElementById('item');
let shoppinglist = document.querySelector('ul')
let button = document.querySelector('button');

button.disabled = true;

button.addEventListener('click', function (event) {
    if (inputBox.value.trim() !== '') {
        button.disabled = false;
        let li = creatNewListItem(inputBox.value);
        shoppinglist.appendChild(li);
        inputBox.value = '';
        button.disabled = true
    }
    inputBox.focus();
});
inputBox.addEventListener('keyup', function (event) {
    if (inputBox.value.trim() !== '') {
        button.disabled = false;
        if (event.key === 'Enter') {
            let li = creatNewListItem(inputBox.value);
            shoppinglist.appendChild(li);
            inputBox.value = '';
            button.disabled = true
        }
    }
});
inputBox.focus();

function creatNewListItem(itemName) {

    let element = document.createElement('li');

    let span = document.createElement('span');
    span.innerText = itemName;

    let space = document.createTextNode('  ');

    let click = document.createElement('button');
    click.innerText = "Delete";

    click.addEventListener('click', function (event) {
        element.remove();
    });

    element.appendChild(span);
    element.appendChild(space);
    element.appendChild(click);
    return element;
}