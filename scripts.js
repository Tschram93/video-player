// Establish the Selectors
const player = document.querySelector('.player');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const ranges = player.querySelectorAll('.player__slider');
const skipButtons = player.querySelectorAll('[data-skip]');
const toggle = player.querySelector('.toggle');
const video = player.querySelector('.viewer');


// Create Functions
function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

// Create Event Listeners
video.addEventListener('click', togglePlay);