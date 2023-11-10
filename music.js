const songs = [
  {
    id: 1,
    name: "Song 1",
    artist: "Artist 1",
    img: "https://seasonmedia.in/wp-content/uploads/2022/09/IMG-20220924-WA0027.jpg",
    genre: "Pop",
    source: "song1.mp3",
  },
  {
    id: 2,
    name: "Song 2",
    artist: "Artist 2",
    img: "https://akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202309/chaleya-song-141618193-1x1.jpg?VersionId=4H9DEXybp0zu2rGuku7n_C2z8stxuBJZ",
    genre: "Rock",
    source: "song2.mp3",
  },
  {
    id: 3,
    name: "Song 3",
    artist: "Artist 3",
    img: "https://apnafilms.com/wp-content/uploads/2020/06/Jubin-Nautiyal-859x639.jpg",
    genre: "Hip-Hop",
    source: "song3.mp3",
  },
  {
    id: 4,
    name: "Song 4",
    artist: "Artist 4",
    img: "https://m.timesofindia.com/photo/98907067/size-158188/98907067.jpg",
    genre: "Rock",
    source: "song4.mp3",
  },
  {
    id: 5,
    name: "Tere Vaaste",
    artist: "Vicky Kaushal",
    img: "https://www.hindustantimes.com/ht-img/img/2023/05/22/550x309/tere_vaaste_1684739304587_1684739326749.jpg",
    genre: "Pop",
    source: "song5.mp3",
  },
  // Add more songs here
];

const { name, artist, img, genre, source } = songs;

function showSongs() {
  const filter = document.getElementById("categoryFilter");
  const selectGenre = filter.value;

  const songList = document.getElementById("songList");

  songList.innerHTML = ""; // Clear the current song list

  songs.forEach((song) => {
    const btn = document.createElement("button");
    btn.innerHTML = `${song.name}`;
    if (selectGenre === "" || song.genre === selectGenre) {
      btn.classList.add("btn1");
      btn.innerHTML = `${song.name}`;
      btn.addEventListener("click", () => playSong(song));
      songList.appendChild(btn);
    }
  });
}

showSongs(); // Initial rendering of all songs

const filter = document.getElementById("categoryFilter");
filter.addEventListener("change", showSongs); // Corrected the event listener

function playSong(song) {
  const imgContainer = document.getElementById("img-container");
  imgContainer.innerHTML = "";

  if (song) {
    // Select a random song if none is provided
    const randomIndex = Math.floor(Math.random() * songs.length);
    song = songs[randomIndex];
    const imgEl = document.createElement("img");
    imgEl.src = song.img;
    imgEl.alt = "Music-img";
  }

  const imgEl = document.createElement("img");
  imgEl.src = song.img;
  imgEl.alt = "Music-img";

  const audioEl = document.createElement("audio");
  audioEl.controls = true;
  const sourceEl = document.createElement("source");
  sourceEl.src = song.source;
  sourceEl.type = "audio/mpeg";
  audioEl.appendChild(sourceEl);
  const prevBtn = document.createElement("button");
  prevBtn.innerHTML = "<=";
  const nextbtn = document.createElement("button");
  nextbtn.innerHTML = "=>";
  const addFav = document.createElement("button");
  addFav.classList.add("add-fav");
  addFav.innerHTML = "AddFav";

  imgContainer.appendChild(imgEl);
  imgContainer.appendChild(audioEl);
  imgContainer.appendChild(prevBtn);
  imgContainer.appendChild(nextbtn);
  imgContainer.appendChild(addFav);
}

playSong(songs);
