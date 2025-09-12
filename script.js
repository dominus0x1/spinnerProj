const loadingText = document.getElementById("loading-text");
const dots = document.getElementById("dots");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const progressContainer = document.getElementById("progress-container");

const frames = [
  ">  ",
  "> _",
  ">  ",
  "> _",
  ">  ",
  "> _",
  ">  ",
  "> _",

  "> L",
  "> L_",
  "> L",

  "> Lo_",
  "> Lo",
  "> Lo_",

  "> Loa ",
  "> Loa_",
  "> Loa ",

  "> Load_",
  "> Load",
  "> Load_",

  "> Loadi ",
  "> Loadi_",
  "> Loadi",

  "> Loadin_",
  "> Loadin",
  "> Loadin_",

  "> Loading",
  "> Loading_",
  "> Loading",

  "> Loading._",
  "> Loading.",
  "> Loading._",

  "> Loading..",
  "> Loading.._",
  "> Loading..",

  "> Loading... ",
  "> Loading... ",
];

let frameIndex = 0;
let progress = 0;
let typing = true;

// let interval = setInterval(() => {
//   if (typing) {
//     loadingText.textContent = frames[frameIndex];
//     frameIndex++;

//     if (frameIndex >= frames.length) {
//       typing = false;
//       loadingText.textContent = "> Loading";
//       dots.style.display = "inline";
//     }
//   }

//   // پیشرفت بار
//   if (progress < 100) {
//     progress += 2;
//     progressBar.style.width = progress + "%";
//     progressText.textContent = progress + "%";
//   } else {
//     clearInterval(interval);
//     // وقتی کامل شد
//     loadingText.textContent = "✓ Completed!";
//     loadingText.classList.add("success");
//     dots.style.display = "none";
//     progressContainer.style.display = "none"; // پراگرس بار حذف بشه
//   }
// }, 200);

function loadingWord(word) {
  const frames = [];
  for (let i = 0; i < 10; i++) frames.push(`> ${i % 2 ? '_' : ''}`);

  return frames;
}

const wordsFrames = loadingWord("Loading");
