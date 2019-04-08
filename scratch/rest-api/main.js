const cardContainer = document.getElementById('app');
const apiUrl = 'https://ghibliapi.herokuapp.com/films';

function createCard(data) {

    return `
    <div class="movie-item card">
        <h3>${data.title}</h3>
        <p>${data.description.substring(0, 300)}</p>

    </div>`;

}

function createItems(films) {
    films.forEach(function (film) {
        cardContainer.innerHTML += createCard(film);
    });
}
function getFilms() {
    fetch(apiUrl).then(function (response) {
        response.json()
        .then(function(data){
            createItems(data);
        });

    })
        .catch(function (reason) {
            console.log('Eror', reason);
        });
}

// function getFilms() {
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', apiUrl);

//     xhr.onload = function (event) {
//         let data= JSON.parse(event.target.response);
//         console.log(data);
//         createItems(data);
//     }
//     xhr.send();
// }

getFilms();