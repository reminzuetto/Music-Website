document.addEventListener("DOMContentLoaded", function () {
  const music = new Audio("./Music/MTP/DungLamTraiTimAnhDau.mp3");

  const songs = [
    {
      id: 1,
      songname: `Đừng làm trái tim anh đau
                    <div class="subtitle">Sơn Tùng MTP</div>`,
      poster: "./MusicThumbnail/DungLamTraiTimAnhDau.jpg",
      mp3link: `./Music/MTP/DungLamTraiTimAnhDau.mp3`,
    },
    {
      id: 2,
      songname: `Muộn rồi mà sao còn
                    <div class="subtitle">Sơn Tùng MTP</div>`,
      poster: "./MusicThumbnail/MuonRoiMaSaoCon.jpg",
      mp3link: `./Music/MTP/MuonRoiMaSaoCon.mp3`,
    },
    {
      id: 3,
      songname: `Nơi này có anh
                    <div class="subtitle">Sơn Tùng MTP</div>`,
      poster: "./MusicThumbnail/NoiNayCoAnh.jpg",
      mp3link: `./Music/MTP/NoiNayCoAnh.mp3`,
    },
  ];

  Array.from(document.getElementsByClassName("songItem")).forEach(
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

  const updateMasterPlayButton = () => {
    if (music.paused || music.currentTime <= 0) {
      masterPlay.classList.add("bi-play-fill");
      masterPlay.classList.remove("bi-pause-fill");
      wave.classList.remove("active2");
    } else {
      masterPlay.classList.add("bi-pause-fill");
      masterPlay.classList.remove("bi-play-fill");
      wave.classList.add("active2");
    }
  };

  masterPlay.addEventListener("click", () => {
    if (music.paused || music.currentTime <= 0) {
      music.play();
    } else {
      music.pause();
    }
    updateMasterPlayButton();
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
    Array.from(document.getElementsByClassName("songItem")).forEach(
      (element) => {
        element.style.background = "rgba(105, 105, 170, 0)";
      }
    );
  };

  let index = 0;

  Array.from(document.getElementsByClassName("playListPlay")).forEach(
    (element, i) => {
      element.addEventListener("click", (e) => {
        index = i;
        makeAllPlay();
        e.target.classList.remove("bi-play-circle-fill");
        e.target.classList.add("bi-pause-circle-fill");
        music.src = songs[index].mp3link;
        poster_master_play.src = songs[index].poster;
        title.innerHTML = songs[index].songname;
        music.play();
        updateMasterPlayButton();
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName("songItem"))[
          index
        ].style.background = "rgba(105, 105, 170, 0.1)";
      });
    }
  );

  music.addEventListener("ended", updateMasterPlayButton);

  let currentStart = document.getElementById("currentStart");
  let currentEnd = document.getElementById("currentEnd");
  let seek = document.getElementById("seek");
  let bar2 = document.getElementById("bar2");
  let dot = document.getElementsByClassName("dot")[0];

  music.addEventListener("loadedmetadata", () => {
    let music_dur = music.duration;
    let min = Math.floor(music_dur / 60);
    let sec = Math.floor(music_dur % 60);
    if (sec < 10) {
      sec = `0${sec}`;
    }
    currentEnd.innerText = `${min}:${sec}`;
  });

  music.addEventListener("timeupdate", () => {
    let music_current = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_current / 60);
    let sec1 = Math.floor(music_current % 60);
    if (sec1 < 10) {
      sec1 = `0${sec1}`;
    }
    currentStart.innerText = `${min1}:${sec1}`;

    if (music_dur) {
      let progressBar = parseInt((music_current / music_dur) * 100);
      seek.value = progressBar;
      let seekbar = seek.value;
      bar2.style.width = `${seekbar}%`;
      dot.style.left = `${seekbar}%`;
    }
  });

  seek.addEventListener("change", () => {
    music.currentTime = (seek.value * music.duration) / 100;
  });

  let vol_icon = document.getElementById("vol_icon");
  let vol = document.getElementById("vol");
  let vol_dot = document.getElementById("vol_dot");
  let vol_bar = document.getElementsByClassName("vol_bar")[0];

  vol.addEventListener("change", () => {
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
    if (vol_a == 0) {
      vol_icon.classList.remove("bi-volume-down-fill");
      vol_icon.classList.add("bi-volume-mute-fill");
      vol_icon.classList.remove("bi-volume-up-fill");
    } else if (vol_a > 0 && vol_a <= 50) {
      vol_icon.classList.remove("bi-volume-mute-fill");
      vol_icon.classList.remove("bi-volume-up-fill");
      vol_icon.classList.add("bi-volume-down-fill");
    } else {
      vol_icon.classList.remove("bi-volume-mute-fill");
      vol_icon.classList.remove("bi-volume-down-fill");
      vol_icon.classList.add("bi-volume-up-fill");
    }
  });

  let back = document.getElementById("back");
  let next = document.getElementById("next");

  const changeSong = (increment) => {
    index += increment;
    if (index < 0) {
      index = songs.length - 1;
    } else if (index >= songs.length) {
      index = 0;
    }
    music.src = songs[index].mp3link;
    poster_master_play.src = songs[index].poster;
    title.innerHTML = songs[index].songname;
    music.play();
    makeAllPlay();
    document.getElementById(index + 1).classList.add("bi-pause-circle-fill");
    document.getElementById(index + 1).classList.remove("bi-play-circle-fill");
    console.log(document.getElementsByClassName("wave")[0].classList);
    wave.classList.add("active2");
    console.log(document.getElementsByClassName("wave")[0].classList);

    updateMasterPlayButton();
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName("songItem"))[
      index
    ].style.background = "rgba(105, 105, 170, 0.1)";
  };

  back.addEventListener("click", () => changeSong(-1));
  next.addEventListener("click", () => changeSong(1));

  let left_scroll = document.getElementById("left_scroll");
  let right_scroll = document.getElementById("right_scroll");
  let items = document.getElementsByClassName("items")[0];
  left_scroll.addEventListener("click", () => {
    items.scrollLeft -= 330;
  });
  right_scroll.addEventListener("click", () => {
    items.scrollLeft += 330;
  });
});
