// --> Timing Configuration.

const CONFIG = {
  typingSpeed: 20,
  progressSpeed: 50,
  progressStep: 1,
};


// --> DOM Elements Selectors.

const loadingText = document.getElementById("loading-text");
const dots = document.getElementById("dots");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const progressContainer = document.getElementById("progress-container");


// --> Initial Values.

let frameIndex = 0;
let progress = 0;
let typing = true;


// --> Generating typing frames.

function loadingWord(word) {
  const frames = [];
  for (let i = 0; i < 10; i++) frames.push(`> ${i % 2 ? "_" : ""}`);
  for (let i = 1; i <= word.length; i++) {
    if (i % 2) {
      frames.push("> " + word.slice(0, i));
      frames.push("> " + word.slice(0, i) + "_");
      frames.push("> " + word.slice(0, i));
    } else {
      frames.push("> " + word.slice(0, i) + "_");
      frames.push("> " + word.slice(0, i));
      frames.push("> " + word.slice(0, i) + "_");
    }
  }
  for (let dots = 1; dots <= 3; dots++) {
    if (dots % 2) {
      frames.push(`> ${word}${".".repeat(dots)}`);
      frames.push(`> ${word}${".".repeat(dots)}_`);
      frames.push(`> ${word}${".".repeat(dots)}`);
    } else {
      frames.push(`> ${word}${".".repeat(dots)}_`);
      frames.push(`> ${word}${".".repeat(dots)}`);
      frames.push(`> ${word}${".".repeat(dots)}_`);
    }
  }
  frames.push(`> ${word}...`);
  return frames;
}

const wordsFrames = loadingWord("Loading");



// --> Typing Animation.

function typingAnimation() {
  if (!typing) return;

  loadingText.textContent = wordsFrames[frameIndex];
  frameIndex++;

  if (frameIndex >= wordsFrames.length) {
    typing = false;
    loadingText.textContent = "> Loading";
    dots.style.display = "inline";
    return;
  }
  setTimeout(typingAnimation, CONFIG.typingSpeed);
}



// --> Progress Animation.

function runProgress() {
  if (progress < 100) {
    progress += CONFIG.progressStep;
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${progress}%`;
    setTimeout(runProgress, CONFIG.progressSpeed);
  } else {
    onComplete();
  }
}



// --> Complete State.

function onComplete() {
  loadingText.textContent = "✓ Completed!";
  loadingText.classList.add("success");
  dots.style.display = "none";
  progressContainer.style.display = "none";
}



// --> Start.

function startLoading() {
  typingAnimation();
  runProgress();
}

startLoading();
