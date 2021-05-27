
function searchSong(query) {
    try {
      const response = fetch(
        `https://api.lyrics.ovh/v1/${query}`
      );
      const data = response.json();
      console.log(data);
      lyrics.textContent = data.lyrics;
      
    } catch (error) {
      console.log(error);
      alert("why cant you do anything right");
  };
  searchSong();
}
  

  const lyrics = document.getElementById("results");
