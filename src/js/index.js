//import { DOMSelectors } from "./DOM";
//import { genres } from "./genre";

const query = async function () {
  try {
    const response = await fetch(
      `https://api.lyrics.ovh/v1/Coldplay/Viva La Vida`
    );
    const data = await response.json();
    console.log(data);
    lyrics.textContent = data.lyrics;
  } catch (error) {
    console.log(error);
    alert("why cant you do anything right");
  }
};
query();

const lyrics = document.getElementById("lyrics");
