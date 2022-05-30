fetch('http://127.0.0.1:5500/server/data/data.json')
  .then(response => response.json())
  .then(data => console.log(data.artists[0]));