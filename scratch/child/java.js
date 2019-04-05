let inG = document.getElementById("ing");
inG.addEventListener('click', function (event) {
    let list = document.createElement('ul');

    
     
    // let listItem = document.createElement('li');
    // listItem.innerText = "egg";
    // list.appendChild(listItem);

    // listItem = document.createElement('li');
    // listItem.innerHTML = "cup of <em>milk</em>";
    // list.appendChild(listItem);

    // listItem = document.createElement('li');
    // listItem.innerText = "oil";
    // list.appendChild(listItem);

    list.appendChild(createListItem('egg'));
    list.appendChild(createListItem('cup of <em> milk </em>'));
    list.appendChild(createListItem('oil'));


    let elBody = document.getElementById('body');
    elBody.appendChild(list);


});


function createListItem(itemName) {
    listItem = document.createElement('li');
    listItem.innerHTML=itemName;
    return listItem;
}



