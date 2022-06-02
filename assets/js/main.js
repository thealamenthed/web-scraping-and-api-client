const createCard = async (items) => {
  let section = document.getElementById("albums");

  section.innerHTML = ""; // vide le contenu 

  items.data.forEach((item) => {
    const card = document.createElement("div");
    const cover = document.createElement("img");
    const album = document.createElement("div");
    const artist = document.createElement("div");
    const genre = document.createElement("div");

    card.classList.add("card");
    cover.width = "95";
    album.classList.add("album");
    artist.classList.add("artist");
    genre.classList.add("genre");

    cover.src = item.image;
    album.innerHTML = item.album;
    artist.innerHTML = item.name;
    genre.innerHTML = item.category;

    card.appendChild(cover);
    card.appendChild(album);
    card.appendChild(artist);
    card.appendChild(genre);

    section.appendChild(card);
  });
};

const getTop10 = async () => {
  const items = await axios.get("http://localhost:8000/api/top10");
  console.log(items);
  createCard(items);
};

const getAll = async () => {
  const items = await axios.get("http://localhost:8000/api/albums");
  console.log(items);
  createCard(items);
};

const getGenreRap = async () => {
  const items = await axios.get("http://localhost:8000/api/category/rap");
  createCard(items);
};

const getGenrePop = async () => {
  const items = await axios.get("http://localhost:8000/api/category/pop");
  createCard(items);
};

const getGenre = async (genre) => {
  const items = await axios.get("http://localhost:8000/api/category/" + genre);
  createCard(items);
};

// ajout d'une propriété on click 
const linkRap = document.getElementById("rap");
linkRap.addEventListener("click", (e) => getGenre("rap"), linkRap.innerHTML);

const linkPop = document.getElementById("pop");
linkPop.addEventListener("click", (e) => getGenre("pop"));

const linkVariete = document.getElementById("variete");
linkVariete.addEventListener("click", (e) => getGenre("variete"));

const linkTop10 = document.getElementById("top10");
linkTop10.addEventListener("click", (e) => getTop10());

const linkAll = document.getElementById("all");
linkAll.addEventListener("click", (e) => getAll());

getAll(); // initialisation de la page

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
