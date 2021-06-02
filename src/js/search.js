import { DOMSelectors } from "./DOM";

const displayLyrics = (lyrics) => {
  const htmlString = lyrics;
  lyrics.innerHTML = htmlString;
};
const searchInput = document.getElementById(`search-input`);
let data = [];
console.log(searchInput);

searchInput.addEventListener(`keyup`, (e) => {
  const searchString = e.target.value;
  const query = async function (searchString) {
    try {
      const response = await fetch(
        `https://api.lyrics.ovh/v1/Coldplay/${searchString}`
      );
      const data = await response.json();
      displayLyrics(data);
      console.log(data);
    } catch (error) {
      console.log(error);
      alert("why cant you do anything right");
    }
  };
  console.log(e.target.value);
  query(searchString);
});

const filteredSongs = data.filter((title) => {
  return title.includes(searchString);
});
displayLyrics(filteredSongs);

const lyrics = document.getElementById("lyrics");
