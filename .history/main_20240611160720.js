const music = new Audio("Music/MTP/DungLamTraiTimAnhDau.mp3");
// create Array

const songs = [
  {
    id: 1,
    songname: `Đừng làm trái tim anh đau
              <div class="subtitle">Sơn Tùng MTP</div>`,
    poster: "./MusicThumbnail/DungLamTraiTimAnhDau.jpg",
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
      element.classList.add("bi-play-circle-fill");
      element.classList.remove("bi-pause-circle-fill");
    }
  );
};

let index = 0;
let mp3 = ``;
Array.from(document.getElementsByClassName("playListPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      index = e.target.id;
      makeAllPlay();
      mp3 = songs[index].mp3link;
      console.log(songs[index]);
      console.log(index);
      console.log(mp3);
      e.target.classList.remove("bi-play-circle-fill");
      e.target.classList.add("bi-pause-circle-fill");
      music.src = `./Music/MTP/${mp3}`;
      music.play();
    });
  }
);
