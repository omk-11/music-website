// navbar  open close shortcut key
document.addEventListener("keydown", (e) => {
    e.preventDefault();
    if (e.key.toLowerCase() === "o" && e.shiftKey) {
      document.getElementById("btn1").click();
    }
  });

  //open and close the playlist
  function open_playlist() {
    document.getElementById("side-nav").style.width = "250px";
    document.getElementById("btn1").style.left = "250px";
    document.getElementById("btn1").innerText = "close";
    document.getElementById("btn1").setAttribute("onclick", "close_playlist()");
  }
  function close_playlist() {
    document.getElementById("side-nav").style.width = "0";
    document.getElementById("btn1").style.left = "10px";
    document.getElementById("btn1").innerText = "open";
    document.getElementById("btn1").setAttribute("onclick", "open_playlist()");
  }


  
  // play/pause system
  let audioElement = new Audio("songs/song1.mp3");
  let masterPlay = document.getElementById("Play");
  let seek_bar = document.getElementById("seek_bar");
  let playcheack;
  
  //play and pause on buttons
  masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
      masterPlay.style.backgroundImage = "url('icon/pause.png')";
      audioElement.play();
      seekUpdate();
      playcheack = 1;
    } else {
      masterPlay.style.backgroundImage = "url('icon/play.png')";
      audioElement.pause();
      seekUpdate();
      playcheack = 0;
    }
  });

  // play and pause on space bar
  document.addEventListener("keydown", (e) => {
    e.preventDefault();
    if (e.key.toLowerCase() === " " ) {
      if(playcheack==0){
        masterPlay.style.backgroundImage = "url('pause.png')";
        audioElement.play();
        seekUpdate();
        playcheack = 1;
      }
      else{
        masterPlay.style.backgroundImage = "url('play.png')";
        audioElement.pause();
        seekUpdate();
        playcheack = 0;
      }
    }
  });


  //update seek bar
  function seekUpdate() {
    audioElement.addEventListener("timeupdate", () => {
      progress = parseInt(
        (audioElement.currentTime / audioElement.duration) * 100
      );
      seek_bar.value = progress;
    });
  
    seek_bar.addEventListener("change", () => {
      audioElement.currentTime = (seek_bar.value * audioElement.duration) / 100;
    });
  }
  
  
  //make a song list
  let Songs = [
    "songs/song1.mp3", "songs/song2.mp3", "songs/song3.mp3", "songs/song4.mp3", "songs/song5.mp3",
    "songs/song6.mp3", "songs/song7.mp3", "songs/song8.mp3", "songs/song9.mp3", "songs/song10.mp3",
    "songs/song11.mp3", "songs/song12.mp3", "songs/song13.mp3", "songs/song14.mp3", "songs/song15.mp3",
    "songs/song16.mp3", "songs/song17.mp3", "songs/song18.mp3", "songs/song19.mp3", "songs/song20.mp3",
    "songs/song21.mp3", "songs/song22.mp3", "songs/song23.mp3", "songs/song24.mp3", "songs/song25.mp3",
    "songs/song26.mp3", "songs/song27.mp3", "songs/song28.mp3", "songs/song29.mp3", "songs/song30.mp3",
    "songs/song31.mp3", "songs/song32.mp3", "songs/song33.mp3", "songs/song34.mp3", "songs/song35.mp3",
    "songs/song36.mp3", "songs/song37.mp3", "songs/song38.mp3"
  ];
  

  function s_play(s){
    audioElement.src = ""; //to change the previous song to null so it stops playing
    seek_bar.value = "0"; //change the seek bar to zero
    seekUpdate(); //reset seek bar
    audioElement.currentTime = 0; //start new song from zero
    audioElement = new Audio(Songs[s]); //change song
    audioElement.play(); //auto play the selected song

    
  
    audioElement.addEventListener("timeupdate", () => {
        if (audioElement.currentTime == audioElement.duration) {
          if (s == 34) {
            s_play(0);
          }
          s_play(s + 1);
        }
      });
    
      document.getElementById("prev").addEventListener("click", () => {
        s_play(s - 1);
      });
      document.getElementById("forward").addEventListener("click", () => {
        s_play(s + 1);
      });

      document.addEventListener("keydown", (e) => {
        e.preventDefault();
        if (e.key.toLowerCase() === "s" && e.shiftKey) {
          s_play(s - 1);
        }
      });

  }
  
  function open_theme() {
    document.getElementById("theme_tab").style.width = "600px";
    document.getElementById("theme").innerText = "close";
    document.getElementById("theme").setAttribute("onclick", "close_theme()");
  }
  function close_theme() {
    document.getElementById("theme_tab").style.width = "0";
    document.getElementById("theme").innerText = "theme";
    document.getElementById("theme").setAttribute("onclick", "open_theme()");
  }


  let background_list = [
    "background/bgm1.gif", "background/bgm7.gif", "background/bgm8.gif",
    "background/bgm9.gif", "background/bgm5.gif", "background/bgm6.gif",
    "background/bgm10.gif"
  ];
  
  
  function change_theme(c) {
    document.getElementById("main").style.backgroundImage = `url("${background_list[c-1]}")`;


  }
  
  function const_change() {
    for (let i = 1; i <= 7; i++) {
      setTimeout(
        (function (index) {
          return function () {
            change_theme(index);
          };
        })(i),i * 30000); // Delay each iteration by 30 seconds (30000 milliseconds)
    }
  }