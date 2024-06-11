const music = new Audio(
  "Music/MTP/DungLamTraiTimAnhDau-SonTungMTP-15013151.mp3"
);
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

let masterPlay = document.getElementById("masterplay");

masterrPlay.addEventListener("click", function () {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    masterrPlay;
  } else {
    music.pause();
  }
});
