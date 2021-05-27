import { DOMSelectors } from "./DOM";

const searchInput = document.getElementById(`search-input`);
let data = [];

console.log(searchInput);

searchInput.addEventListener(`keyup`, (e) => {
  const searchString = e.target.value;
  const filteredSongs = data.filter( title => {
    return title.includes(searchString) || artist.includes(searchString);
  }); 
  displayLyrics(filteredSongs);
});

const query = async function () {
  try {
    const response = await fetch(
      `https://api.lyrics.ovh`
    );
    data = await response.json();
    displayLyrics(lyrics);
    console.log(data);
    
  } catch (error) {
    console.log(error);
    alert("why cant you do anything right");
  }
};

const displayLyrics = (lyrics) => {
  const htmlString = lyrics
  lyrics.innerHTML = htmlString;  
  
}


query();





