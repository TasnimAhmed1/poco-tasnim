const inputBox = document.getElementById('item');
const shoppinglist = document.querySelector('ul')
const button = document.querySelector('button');

button.disabled = true;

button.addEventListener('click', function (event) {

    const trimmedvalue = inputBox.value.trim();

    if (trimmedvalue === '') {
        return;
    }

    const li = creatNewListItem(inputBox.value);
    shoppinglist.appendChild(li);
    inputBox.value = '';
    button.disabled = true;
    inputBox.focus();
});
inputBox.addEventListener('keyup', function (event) {
    const trimmedvalue = inputBox.value.trim();
    button.disabled = trimmedvalue === '';
    // if (trimmedvalue !== '') {
    //     if (event.key === 'Enter') {
    //         const li = creatNewListItem(trimmedvalue);
    //         shoppinglist.appendChild(li);
    //         inputBox.value = '';
    //     }
    // }
    // button.disabled = trimmedvalue ==='';

    if (trimmedvalue === '') {
        return;
    }
    if (event.key !== 'Enter') {
        return;
    }
    const li = creatNewListItem(trimmedvalue);
    shoppinglist.appendChild(li);
    inputBox.value = '';
    button.disabled = true;
});

inputBox.focus();

function creatNewListItem(itemName) {

    const element = document.createElement('li');

    const span = document.createElement('span');
    span.innerText = itemName;

    const space = document.createTextNode('  ');

    const click = document.createElement('button');
    click.innerText = "Delete";

    click.addEventListener('click', function (event) {
        element.remove();
    });

    element.appendChild(span);
    element.appendChild(space);
    element.appendChild(click);
    return element;
}