const music = new Audio("Music/MTP/DungLamTraiTimAnhDau.mp3");

const songs = [
  {
    id: 1,
    songname: `Đừng làm trái tim anh đau
                          <div class="subtitle">Sơn Tùng MTP</div>`,
    poster: "./MusicThumbnail/DungLamTraiTimAnhDau.jpg",
    mp3link: `DungLamTraiTimAnhDau.mp3`,
  },
  {
    id: 2,
    songname: `Muộn rồi mà sao còn
                          <div class="subtitle">Sơn Tùng MTP</div>`,
    poster: "./MusicThumbnail/MuonRoiMaSaoCon.jpg",
    mp3link: `MuonRoiMaSaoCon.mp3`,
  },
  {
    id: 3,
    songname: `Nơi này có anh
                          <div class="subtitle">Sơn Tùng MTP</div>`,
    poster: "./MusicThumbnail/NoiNayCoAnh.jpg",
    mp3link: `NoiNayCoAnh.mp3`,
  },
];

Array.from(document.getElementsByClassName("songitem")).forEach(
  (element, i) => {
    if (songs[i]) {
      element.querySelector("img").src = songs[i].poster;
      element.querySelector("h5").innerHTML = songs[i].songname;
    }
  }
);

let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementsByClassName("wave")[0];
let poster_master_play = document.getElementById("poster_master_play");
let title = document.getElementById("title");

masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    masterPlay.classList.add("bi-pause-fill");
    masterPlay.classList.remove("bi-play-fill");
    wave.classList.add("active2");
  } else {
    music.pause();
    masterPlay.classList.add("bi-play-fill");
    masterPlay.classList.remove("bi-pause-fill");
    wave.classList.remove("active2");
  }
});

const makeAllPlay = () => {
  Array.from(document.getElementsByClassName("playListPlay")).forEach(
    (element) => {
      element.classList.add("bi-play-circle-fill");
      element.classList.remove("bi-pause-circle-fill");
    }
  );
};

const makeAllBackgrounds = () => {
  Array.from(document.getElementsByClassName("songItem")).forEach((element) => {
    element.style.background = "rgb(105, 105, 170, 0.1)";
  });
};

let index = 0;

Array.from(document.getElementsByClassName("playListPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      index = parseInt(e.target.id, 10) - 1;
      if (songs[index]) {
        makeAllPlay();
        e.target.classList.remove("bi-play-circle-fill");
        e.target.classList.add("bi-pause-circle-fill");
        music.src = `./Music/MTP/${songs[index].mp3link}`;
        poster_master_play.src = songs[index].poster;
        title.innerHTML = songs[index].songname;
        music.play();
        masterPlay.classList.add("bi-pause-fill");
        masterPlay.classList.remove("bi-play-fill");
        wave.classList.add("active2");
      }
    });
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName("songItem"))[
      `${index}`
    ].style.background = "rgb(105, 105, 170, 0.1)";
  }
);

// Cập nhật trạng thái nút play/pause khi nhạc kết thúc
music.addEventListener("ended", () => {
  masterPlay.classList.add("bi-play-fill");
  masterPlay.classList.remove("bi-pause-fill");
  wave.classList.remove("active2");
  makeAllPlay();
});

let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");

music.addEventListener("timeupdate", () => {
  let music_current = music.currentTime;
});
