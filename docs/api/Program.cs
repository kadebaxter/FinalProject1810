var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors();
var app = builder.Build();
app.UseCors(option => option
.AllowAnyHeader()
.AllowAnyOrigin()
.AllowAnyMethod()
);

List<Song> songs = new List<Song>()
{
    new Song("Racing Against the Sunset", "First Playlist", "https://m.media-amazon.com/images/S/aplus-media/kdp/e1d8c217-ad55-44bd-b7c3-88f754b60be0.__CR0,0,970,600_PT0_SX970_V1___.png",317),
    new Song("Dark Night of the Soul", "Second Playlist", "https://m.media-amazon.com/images/S/aplus-media/kdp/e1d8c217-ad55-44bd-b7c3-88f754b60be0.__CR0,0,970,600_PT0_SX970_V1___.png", 431)
};



app.MapGet("/songLists", () => songs);
app.MapPost("/songLists", (SongCreationRequest request) =>
{
    var newSong = new Song(request.songName, request.playlist, request.imgURL, request.songLength);
    songs.Add(newSong);
});


app.Run();

record Song(string songName, string playlist, string imgURL, int songLength);

record SongCreationRequest(string songName, string playlist, string imgURL, int songLength);