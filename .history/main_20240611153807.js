const music = new Audio("Music/MTP/1.mp3");
// create Array

const songs = [
  {
    id: "1",
    songname: `Đừng làm trái tim anh đau
              <div class="subtitle">Sơn Tùng MTP</div>`,
    poster: "./MusicThumbnail/DungLamTraiTimAnhDau.jpg",
  },
  {
    id: "2",
    songname: `Muộn rồi mà sao còn
              <div class="subtitle">Sơn Tùng MTP</div>`,
    poster: "./MusicThumbnail/MuonRoiMaSaoCon.jpg",
  },
  {
    id: "3",
    songname: `Nơi này có anh
              <div class="subtitle">Sơn Tùng MTP</div>`,
    poster: "./MusicThumbnail/NoiNayCoAnh.jpg",
  },
];

Array.from(document.getElementsByClassName("songitem")).forEach(
  (element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].poster;
    element.getElementsByTagName("h5")[0].innerHTML = songs[i].songname;
  }
);

let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementsByClassName("wave")[0];

masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    masterPlay.classList.toggle("bi-play-fill");
    masterPlay.classList.toggle("bi-pause-fill");
    wave.classList.toggle("active2");
  } else {
    music.pause();
    masterPlay.classList.toggle("bi-play-fill");
    masterPlay.classList.toggle("bi-pause-fill");
    wave.classList.toggle("active2");
  }
});

const makeAllPlay = () => {
  Array.from(document.getElementsByClassName("playListPlay")).forEach(
    (element) => {
      element.addEventListener("click", (e) => {
        element.target.classList.toggle("bi-play-circle-fill");
        element.target.classList.toggle("bi-pause-circle-fill");
      });
    }
  );
};

let index = 0;
Array.from(document.getElementsByClassName("playListPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      index = e.target.id;
      e.target.classList.toggle("bi-play-circle-fill");
      e.target.classList.toggle("bi-pause-circle-fill");
      music.src = `./Music/MTP/DungLamTraiTimAnhDau-SonTungMTP-15013151.mp3`;
    });
  }
);
