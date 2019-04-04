
document.querySelector('button').addEventListener('click', function (event) {
    // creatNewListItem();
    let inputBox = document.getElementById('item');
    let li = creatNewListItem(inputBox.value);
    document.querySelector('ul').appendChild(li);
});





document.getElementById('item').addEventListener('keyup', function (event){
    if(event.key === 'Enter' ){
        let inputBox = document.getElementById('item');
    let li = creatNewListItem(inputBox.value);
    document.querySelector('ul').appendChild(li);
    }
});

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