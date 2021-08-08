const container =document.getElementById('container');
const songTitle =document.getElementById('song-title');
const progress =document.getElementById('progress');
const progressBar =document.getElementById('progress-bar');
const audio =document.getElementById('audio');
const albumArt =document.getElementById('album-art');
const previousBtn =document.getElementById('previous');
const playBtn =document.getElementById('play');
const nextBtn =document.getElementById('next');


const tracks = ['dota2','epic','Ertugul'];

let trackIndex = 1;

loadTrack(tracks[trackIndex]);


function loadTrack(track) {
    // update song title:
    songTitle.innerText = track;
    // update the src in audio element:
    audio.src = `music/${track}.mp3`;
    //update the src in the img:
    albumArt.src = `images/${track}.jpg`;
};

function playTrack() {
    //Add the class play
    container.classList.add('play');
    // change the icon:
    playBtn.innerHTML = `<i class="fas fa-pause"></i>`;

    audio.play();
};

function pauseTrack() {
    //Add the class play
    container.classList.remove('play');
    // change the icon:
    playBtn.innerHTML = `<i class="fas fa-play"></i>`;

    audio.pause();
};

function previous() {
    trackIndex--;
    if(trackIndex < 0){
        trackIndex = tracks.length -1;
    };
    loadTrack(tracks[trackIndex]);
    playTrack();
};

function nextTrack() {
    trackIndex++;
    if(trackIndex >  tracks.length -1){
        trackIndex = 0;
    };
    loadTrack(tracks[trackIndex]);
    playTrack();
};

function timeupdate(e) {
    const {duration,currentTime} = e.srcElement;

    const percentage = currentTime / duration *100;

    progressBar.style.width = `${percentage}%`;

};

function currentLoacation(e) {
    const width = this.clientWidth;

    const clickLocation = e.offsetX;

    const duration = audio.duration;

    audio.currentTime = clickLocation / width * duration;
};

playBtn.addEventListener('click', () => {
    const isPlaying = container.classList.contains('play');
    if(isPlaying){
        pauseTrack();
    }
    else{
        playTrack();
    }
});


previousBtn.addEventListener('click',previous);
nextBtn.addEventListener('click',nextTrack);
audio.addEventListener('timeupdate',timeupdate);
progress.addEventListener('click',currentLoacation);
audio.addEventListener('ended',nextTrack);


