const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestap");



// Functions for Event Listners:

// 1. function for video toggle
function toggleVideo(){
    if(video.paused){
        video.play();
    }
    else{
        video.pause();
    }
}

// function for update play and pause button
function updatePlayicon(){
    if(video.paused){
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
        
    }
    else{
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    }
}

// function to stop the button
function stopVideo(){
    video.currentTime = 0;
    video.pause();
}

// function for video update progress:
function updateProgress(){
    progress.value = (video.currentTime / video.duration) * 100;

    let mins = Math.floor(video.currentTime / 60);
    if(mins < 10){
        mins = '0' + String(mins);
    }

    let secs =  Math.floor(video.currentTime % 60);
    if(secs < 10){
        secs = '0' + String(secs);
    }
    timestamp.innerHTML = `${mins}:${secs}`;
}

// 

function changeDuration(){
    video.currentTime = (+progress.value * video.duration) / 100;
}



//Event Listners:
// 1. for video
video.addEventListener('click',toggleVideo);
play.addEventListener('click',toggleVideo);
stop.addEventListener('click',stopVideo);
video.addEventListener('pause',updatePlayicon);
video.addEventListener('play',updatePlayicon);
video.addEventListener('timeupdate',updateProgress);

progress.addEventListener('change',changeDuration);
// 2. for play button

// 3. for stop button
