const music = new Audio();
let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];
let wavea = document.getElementsByClassName('wavea')[0];

// Cập nhật giao diện và phát nhạc
function updateMusic(data) {
    document.getElementById('poster_master_play').src = data.imgSrc;
    document.querySelector('.playableTile__heading').innerHTML = data.heading;
    document.querySelector('.playableTile__usernameHeading').innerHTML = data.spanText;
    music.src = data.audioSrc;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
    wavea.classList.add('active3');
}

// Gửi thông điệp play/pause đến iframe
function sendMessageToIframe(action) {
    const iframe = document.querySelector('iframe');
    iframe.contentWindow.postMessage({ action: action }, '*');
}

// Lắng nghe thông điệp từ iframe
window.addEventListener('message', (event) => {
    if (event.data.imgSrc) {
        updateMusic(event.data);
    }
});

// Xử lý sự kiện play/pause trong trang chính
masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        wavea.classList.add('active3');
        sendMessageToIframe('play');
    } else {
        music.pause();
        masterPlay.classList.remove('bi-pause-fill');
        masterPlay.classList.add('bi-play-fill');
        wave.classList.remove('active2');
        wavea.classList.remove('active3');
        sendMessageToIframe('pause');
    }
});

// Lắng nghe sự kiện play/pause từ iframe
window.addEventListener('message', (event) => {
    if (event.data.action === 'play') {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        wavea.classList.add('active3');
    } else if (event.data.action === 'pause') {
        music.pause();
        masterPlay.classList.remove('bi-pause-fill');
        masterPlay.classList.add('bi-play-fill');
        wave.classList.remove('active2');
        wavea.classList.remove('active3');
    }
});



// index.js


let currentStart=document.getElementById("currentStart");
let currentEnd=document.getElementById("currentEnd");
let seek= document.getElementById("seek");
let bar2=document.getElementById("bar2");
let dot=document.getElementsByClassName("dot")[0];
music.addEventListener("timeupdate", () => {
  let music_curr=music.currentTime;
  let music_dur=music.duration;

  let min1=Math.floor(music_dur/60);
  let sec1=Math.floor(music_dur%60);
  if(sec1<10){
    sec1=`0${sec1}`;
  }
  currentEnd.innerText=`${min1}:${sec1}`
  

  let min2=Math.floor(music_curr/60);
  let sec2=Math.floor(music_curr%60); 
   if(sec2<10){
    sec2=`0${sec2}`;
  }
  currentStart.innerText=`${min2}:${sec2}`
  

  let progressBar= parseInt((music_curr/music_dur)*100);
  seek.value=progressBar;
  let seekbar= seek.value;
  bar2.style.width=`${seekbar}%`;
  dot.style.left=`${seekbar}%`;

 

})
seek.addEventListener('change', ()=>{
  music.currentTime=seek.value *music.duration/100;
  
})


let vol_icon=document.getElementById('vol_icon');
let vol=document.getElementById("vol")
let vol_bar=document.getElementsByClassName('vol_bar')[0];
let vol_dot=document.getElementById('vol_dot');
 vol.addEventListener('change',()=>{
  if (vol.value==0){
    vol_icon.classList.remove('bi-volume-up-fill');
    vol_icon.classList.remove('bi-volume-down-fill');
    vol_icon.classList.add('bi-volume-mute-fill');

  }
  if(vol.value>0){
    vol_icon.classList.remove('bi-volume-up-fill');
    vol_icon.classList.add('bi-volume-down-fill');
    vol_icon.classList.remove('bi-volume-mute-fill');

  }
  if(vol.value>50){
    vol_icon.classList.add('bi-volume-up-fill');
    vol_icon.classList.remove('bi-volume-down-fill');
    vol_icon.classList.romove('bi-volume-mute-fill');
  }
  let vol_a=vol.value;
  vol_bar.style.width=`${vol_a}%`;
  vol_dot.style.left=`${vol_a}%`; 
  music.volume=vol_a/100;
 })


 

 function sendMessageToHome() {
  // Gửi tin nhắn đến home.js
  const message = "Bài hát kết thúc";
  window.parent.postMessage(message, '*');
}
// Xử lý sự kiện khi bài hát kết thúc
function handleSongEnd() {
  // Gọi hàm để gửi tin nhắn
  sendMessageToHome();
}

// Gán hàm xử lý sự kiện khi bài hát kết thúc
audio.addEventListener('ended', handleSongEnd);


