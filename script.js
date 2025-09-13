// --> Timing Configuration.
const CONFIG = {
  typingSpeed: 30,
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
  for (let i = 0; i < 10; i++){
      frames.push("> " + word.slice(0, i)) + blinkingLoop();
  }
  return frames;
}

const wordsFrames = loadingWord("Loading...");

// --> Typing Animation.
function typingAnimation() {
  if (!typing) return;

  loadingText.textContent = wordsFrames[frameIndex];
  frameIndex++;

  if (frameIndex >= wordsFrames.length) {
    typing = false;
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

// --> Blinking Loop (after typing done).
function blinkingLoop() {
  if (!typing && progress < 100) {
    loadingText.textContent = `> Loading... ${progress % 2 ? "_" : ""}`;
  }
  setTimeout(blinkingLoop, 50);
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
  blinkingLoop();
}

startLoading();
