// ======================================================
// DIVINE ALIGNMENT MEDIA PLAYER
// ======================================================

let playlist = [];

let currentTrack = 0;

const audio = document.getElementById("audioPlayer");
const cover = document.getElementById("cover");
const title = document.getElementById("songTitle");
const artist = document.getElementById("artistName");

const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const nextButton = document.getElementById("nextButton");
const previousButton = document.getElementById("previousButton");

const progressFill = document.querySelector(".progress-fill");

const progressBar = document.getElementById("progressBar");

const volumeSlider = document.getElementById("volumeSlider");
const playlistContainer = document.getElementById("playlist");

const currentTimeDisplay = document.getElementById("currentTime");

const totalTimeDisplay = document.getElementById("totalTime");

async function loadPlaylist(){

    const response = await fetch("playlist.json");

    playlist = await response.json();

    loadTrack(0);

}

function loadTrack(index){

    currentTrack = index;

    const track = playlist[index];

    title.textContent = track.title;

    artist.textContent = track.artist;

    cover.src = track.cover;

    audio.src = track.file;

    renderPlaylist();

}

function playTrack(){

    audio.play();

    cover.classList.add("playing");

}

function pauseTrack(){

    audio.pause();

    cover.classList.remove("playing");

}

function nextTrack(){

    currentTrack++;

    if(currentTrack >= playlist.length){

        currentTrack = 0;

    }

    loadTrack(currentTrack);

    playTrack();

}

function previousTrack(){

    currentTrack--;

    if(currentTrack < 0){

        currentTrack = playlist.length-1;

    }

    loadTrack(currentTrack);

    playTrack();

}

audio.addEventListener("timeupdate",()=>{

    if(audio.duration){

        const percent =
        (audio.currentTime / audio.duration) * 100;

        progressFill.style.width = percent + "%";

        currentTimeDisplay.textContent =
        formatTime(audio.currentTime);

        totalTimeDisplay.textContent =
        formatTime(audio.duration);

    }

});

audio.addEventListener("ended",()=>{

    nextTrack();

});

playButton.addEventListener("click",playTrack);

pauseButton.addEventListener("click",pauseTrack);

nextButton.addEventListener("click",nextTrack);

previousButton.addEventListener("click",previousTrack);

function renderPlaylist(){

    playlistContainer.innerHTML="";

    playlist.forEach((track,index)=>{

        const item=document.createElement("div");

        item.className="playlist-item";

        if(index===currentTrack){

            item.classList.add("active");

        }

        item.innerHTML=`

        <div class="track-number">${index+1}</div>

        <div class="track-information">

            <h3>${track.title}</h3>

            <p>${track.artist}</p>

        </div>

        <div class="track-time">

            ${track.duration}

        </div>

        `;

        item.onclick=()=>{

            loadTrack(index);

            playTrack();

        };

        playlistContainer.appendChild(item);

    });

}



function formatTime(seconds){

    const minutes = Math.floor(seconds / 60);

    const secs = Math.floor(seconds % 60);

    return `${minutes}:${secs.toString().padStart(2,"0")}`;

}
if(progressBar){

    progressBar.addEventListener("click",(e)=>{

  const rect = progressBar.getBoundingClientRect();

const clickX = e.clientX - rect.left;

const percent = clickX / rect.width;

audio.currentTime = percent * audio.duration;

    });

}
loadPlaylist();
volumeSlider.addEventListener("input",()=>{

    audio.volume = volumeSlider.value / 100;

});