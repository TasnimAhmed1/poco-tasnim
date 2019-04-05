let inputBox = document.getElementById('item');
let shoppinglist = document.querySelector('ul')

document.querySelector('button').addEventListener('click', function (event) {
    if(inputBox.value.trim() !== ''){
    let li = creatNewListItem(inputBox.value);
    shoppinglist.appendChild(li);
    inputBox.value = '';
    }
    inputBox.focus();
});
document.getElementById('item').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        if(inputBox.value.trim() !== ''){
        let li = creatNewListItem(inputBox.value);
        shoppinglist.appendChild(li);
        inputBox.value = '';
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