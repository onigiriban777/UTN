
const video = document.getElementById('videin');
const playPause = document.getElementById('play-pause');

function reproducir() {
    if(video.paused) {
        video.play();
        playPause.src='https://img.icons8.com/android/24/000000/pause.png'
    }else{
        video.pause();
        playPause.src='https://img.icons8.com/android/24/000000/play.png'
    }

}

function detener() {
    video.pause();
    video.currentTime= 0;
}

function saltar(fotogramas) {
    video.currentTime += fotogramas
}