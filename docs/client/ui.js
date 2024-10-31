import {} from "./domain.js";
import { GetAllSongs, AddSong } from "./svc.js";

const cardContainer = document.getElementById("cardContainer");
const formContainer = document.getElementById("formContainer");

const buildCard = (data) => {
  const card = document.createElement("div");
  const cardTitle = document.createElement("h2");
  const cardFigure = document.createElement("figure");
  const cardImg = document.createElement("img");
  const cardImgText = document.createElement("figcaption");
  const addButton = document.createElement("input");
//   addButton.classList.add("add-button");
//   addButton.setAttribute("type", "button");
//   addButton.value = "Add to Playlist";

  cardTitle.innerText = data.songName;
  cardImgText.innerText = data.playlist;
  card.classList.add("card");

  cardImg.setAttribute("src", data.imgURL);
  cardFigure.appendChild(cardImg);
  cardFigure.appendChild(cardImgText);
//   card.appendChild(addButton);
  card.appendChild(cardTitle);
  card.appendChild(cardFigure);

//   addButton.addEventListener("click", (event) => {
    
//   });
  return card;
};

formContainer.addEventListener("submit", async (event) => {
  event.preventDefault();
  const songName = document.getElementById("songName").value;
  const playlist = document.getElementById("choosePlaylist").value;
  const songLength = document.getElementById("songLength").value;
  const imgURL = document.getElementById("songURL").value;

  await AddSong(songName, playlist, imgURL, songLength);
  await renderCards();
});

const renderCards = async () => {
  const songs = await GetAllSongs();
console.log("in render")
  cardContainer.replaceChildren();
  songs.forEach((song) => {
    console.log(song)
    const card = buildCard(song);
    cardContainer.appendChild(card);
  });
  
};

renderCards();
// cardContainer.appendChild(card);
