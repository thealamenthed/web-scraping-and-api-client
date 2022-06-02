const createCard = async (items) => {
  // création du variable contenanant les données de l'api
  let section = document.getElementById("albums"); // variable pour récupèrer l'Id albums dans le doc html

  section.innerHTML = ""; // vide le contenu

  console.log(items.data.length); // affiche le nombre d'élément dans le tableau
  document.querySelector(".total").innerHTML = `(${items.data.length})`; // affiche le nombre d'élément dans le tableau

  items.data.forEach((item) => {
    // création d'une boucle forEach pour parcourir chaque element du tableau de données de l'api
    const card = document.createElement("div"); // création d'un élément div pour card
    const cover = document.createElement("img"); // création d'un élément img pour cover
    /* const coverAlbum = document.createElement("img"); // création d'un élément img pour coverAlbum */
    const artist = document.createElement("div"); // création d'un élément div pour artist
    const genre = document.createElement("div"); // création d'un élément div pour genre

    card.classList.add("card"); // ajout d'une class dans l'html (card)
    cover.width = "150"; // ajout largeur de l'image déans l'html (cover)
    /* coverAlbum.width = "150"; // ajout largeur de l'image déans l'html (coverAlbum) */
    artist.classList.add("artist"); // ajout d'une class dans l'html (artist)
    genre.classList.add("genre"); // ajout d'une class dans l'html (genre)

    cover.src = item.image; // je veux ajouter dans l'img html la source qui se trouve danq l'api (image)
    /* coverAlbum.src = item.album; // je veux ajouter dans l'img html de la source qui se trouve dans l'api (album)   artist.innerHTML = item.name; */ // je veux ajouter dans l'html de l'élément artist le nom qui se trouve danq l'api (name)
    genre.innerHTML = item.category; // je veux ajouter dans l'html de l'élément genre, le genre qui se trouve dans l'api (category)
    artist.innerHTML = item.name;

    card.appendChild(cover); // dans la card j'ajoute l'enfant (cover)
    /* card.appendChild(coverAlbum); // dans la card j'ajoute l'enfant (coverAlbum) */
    card.appendChild(artist); // dans la card j'ajoute l'enfant (artist)
    card.appendChild(genre); // dans la card j'ajoute l'enfant (genre)
    section.appendChild(card); // dans selection j'ajoute l'enfant (card)
  });
};

// création d'une fonction pour afficher le top 10
const getTop10 = async (title) => {
  let titleSection = document.getElementById("section-title"); // variable pour récupèrer l'Id section-title dans le doc html
  titleSection.innerHTML = title; // je veux ajouter dans l'html de l'élément title le titre qui se trouve dans l'api (title)
  const items = await axios.get("http://localhost:8000/api/top10"); // appel de l'api
  /* console.log(items); */
  createCard(items); // variable contenant les données de l'api
};

// création d'une fonction pour afficher pour tous les albums
const getAll = async (title) => {
  let titleSection = document.getElementById("section-title");
  titleSection.innerHTML = title;
  const items = await axios.get("http://localhost:8000/api/albums");
  /* console.log(items); */
  createCard(items);
};

// création d'une fonction pour afficher les genres
const getGenre = async (genre, title) => {
  let titleSection = document.getElementById("section-title");
  titleSection.innerHTML = title;
  const items = await axios.get("http://localhost:8000/api/category/" + genre);
  createCard(items);
};

// ajout d'une propriété "on click"
const linkRap = document.getElementById("Rap");
console.log(linkRap.innerHTML);
linkRap.addEventListener("click", (e) => {
  getGenre("Rap", linkRap.innerHTML);
});

const linkRnB = document.getElementById("RnB");
console.log(linkRnB.innerHTML);
linkRnB.addEventListener("click", (e) => getGenre("RnB", linkRnB.innerHTML));

const linkPop = document.getElementById("Pop");
linkPop.addEventListener("click", (e) => getGenre("Pop", linkPop.innerHTML));

const linkAfro = document.getElementById("Afro");
linkAfro.addEventListener("click", (e) => getGenre("Afro", linkAfro.innerHTML));

const linkRock = document.getElementById("Rock");
linkRock.addEventListener("click", (e) => getGenre("Rock", linkRock.innerHTML));

const linkCountry = document.getElementById("Country");
linkCountry.addEventListener("click", (e) =>
  getGenre("Country", linkCountry.innerHTML)
);

const linkVariete = document.getElementById("variete");
linkVariete.addEventListener("click", (e) =>
  getGenre("variete", linkVariete.innerHTML)
);

const linkTop10 = document.getElementById("top10");
linkTop10.addEventListener("click", (e) => getTop10(linkTop10.innerHTML));

const linkAll = document.getElementById("all");
linkAll.addEventListener("click", (e) => getAll(linkAll.innerHTML));

getAll(linkAll.innerHTML); // initialisation de la page

/* console.log('hello world'); */

/* 
const getItemsFromServer = async () => {
  const items = await axios.get('http://localhost:8000/api/items')

  const row = document.getElementById('items-list');

  items.data.forEach(item => {
    const card = document.createElement('div');
    const cardBody = document.createElement('div');
    const image = document.createElement('img');
    const name = document.createElement('h2');
    const description = document.createElement('p');
    const category = document.createElement('p');
    const album = document.createElement('img');
 */

/* fetch('http://127.0.0.1:5500/server/data/data.json')
  .then(response => response.json())
  .then(data => console.log(data.artists[0])); */
