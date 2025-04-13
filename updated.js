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
  let audioElement = new Audio("song1.mp3");
  let masterPlay = document.getElementById("Play");
  let seek_bar = document.getElementById("seek_bar");
  let playcheack;
  
  //play and pause on buttons
  masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
      masterPlay.style.backgroundImage = "url('pause.png')";
      audioElement.play();
      seekUpdate();
      playcheack = 1;
    } else {
      masterPlay.style.backgroundImage = "url('play.png')";
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
  
  
  //make a song list Ajax 
  let Songs = [
    "song1.mp3","song2.mp3","song3.mp3","song4.mp3","song5.mp3","song6.mp3","song7.mp3","song8.mp3","song9.mp3","song10.mp3","song11.mp3","song12.mp3","song13.mp3","song14.mp3","song15.mp3","song16.mp3","song17.mp3","song18.mp3","song19.mp3","song20.mp3","song21.mp3","song22.mp3","song23.mp3","song24.mp3","song25.mp3","song26.mp3","song27.mp3","song28.mp3","song29.mp3","song30.mp3","song31.mp3","song32.mp3","song33.mp3","song34.mp3","song35.mp3","song36.mp3","song37.mp3","song38.mp3",
  ]

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


  backgeround_list = [
    'bgm1.gif','bgm7.gif','bgm8.gif','bgm9.gif','bgm5.gif','bgm6.gif','bgm10.gif'
  ]
  
  function change_theme(c) {
    document.getElementById("main").style.backgroundImage = "url("+backgeround_list[c-1]+")";
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