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

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    // console.log(icon);
    toggle.textContent = icon;
    // console.log('Update the Button');
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function skip() {
    // console.log('Skipping');
    video.currentTime += parseFloat(this.dataset.skip);

}
// Create Event Listeners
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', scrub);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
skipButtons.forEach(button => button.addEventListener('click', skip));
toggle.addEventListener('click', togglePlay);