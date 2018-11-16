document.addEventListener('DOMContentLoaded', function () {
  let video = document.getElementById("video_boosteroid");
  let playpauseButton = document.getElementById("playpause");
  let seekBar = document.getElementById("seek-bar");
  let fullScreenButton = document.getElementById("full-screen");
  let bigPlayButton = document.getElementsByClassName("play_button")[0];

  playpauseButton.style.backgroundImage = "url('./img/play-button.png')";

  video.controls = false;

  playpauseButton.addEventListener('click', function () {
    if (video.paused || video.ended) {
      playpauseButton.title = "pause";
      playpauseButton.style.backgroundImage = "url('./img/pause-button.png')";
      bigPlayButton.style.opacity = 0;
      video.play();
    } else {
      playpauseButton.style.backgroundImage = "url('./img/play-button.png')";
      playpauseButton.title = "play";
      bigPlayButton.style.opacity = 1;
      video.pause();
    }
  })

  bigPlayButton.addEventListener('click', function () {
    if (video.paused || video.ended) {
      playpauseButton.title = "pause";
      playpauseButton.style.backgroundImage = "url('./img/pause-button.png')";
      bigPlayButton.style.opacity = 0;
      video.play();
    } else {
      playpauseButton.style.backgroundImage = "url('./img/play-button.png')";
      playpauseButton.title = "play";
      bigPlayButton.style.opacity = 1;
      video.pause();
    }
  })

  video.addEventListener('click', function () {
    if (video.paused || video.ended) {
      playpauseButton.title = "pause";
      playpauseButton.style.backgroundImage = "url('./img/pause-button.png')";
      bigPlayButton.style.opacity = 0;
      video.play();
    } else {
      playpauseButton.style.backgroundImage = "url('./img/play-button.png')";
      playpauseButton.title = "play";
      bigPlayButton.style.opacity = 1;
      video.pause();
    }
  })

  seekBar.addEventListener("change", function () {
    let time = video.duration * (seekBar.value / 100) || 0;
    video.currentTime = time;
  });

  video.addEventListener("timeupdate", function () {
    var value = (100 / video.duration) * video.currentTime || 0;
    seekBar.value = value;
  });

  video.addEventListener("ended", function () {
    playpauseButton.style.backgroundImage = "url('./img/play-button.png')";
    playpauseButton.title = "play";
    bigPlayButton.style.opacity = 1;
    video.load();
  }, false);


  fullScreenButton.addEventListener("click", function () {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen(); // Firefox
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen(); // Chrome and Safari
    }
  });
})