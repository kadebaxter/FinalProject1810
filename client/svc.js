export const GetAllSongs = async () => {
  const url = "http://localhost:5232/songLists";
  const response = await fetch(url);
  console.log("here")
  return await response.json();
};

export const AddSong = async (songName, playlist, imgURL, songLength) => {
  const url = "http://localhost:5232/songLists";
  const newUser = { songName, playlist, imgURL, songLength };
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  });
};