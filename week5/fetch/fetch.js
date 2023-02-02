// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/squirtle";
let results = null;
async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}

function pokemonTemplate(pokemon) {
  return `<h2>${pokemon.name}</h2><img src="${pokemon.sprites.front_default}" alt="Picture of ${pokemon.name}">`;
}

function doStuff(data) {
  results = data;
  console.log("first: ", results);
  outputEl = document.querySelector("#output");
  templateHTML = pokemonTemplate(data);
  outputEl.innerHTML = templateHTML;
}
getPokemon(url);
console.log("second: ", results);
