const loadingText = document.getElementById("loading-text");
const dots = document.getElementById("dots");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");

const frames = [
  "> _",
  ">  ",
  "> _",
  ">  ",
  "> _",
  "> _",
  "> L_",
  "> Lo_",
  "> Loa_",
  "> Load_",
  "> Loadi_",
  "> Loadin_",
  "> Loading_",
  "> Loading ._",
  "> Loading . ._",
  "> Loading . . .",
];

let frameIndex = 0;
let progress = 0;
let typing = true;

let interval = setInterval(() => {
  if (typing) {
    loadingText.textContent = frames[frameIndex];
    frameIndex++;

    if (frameIndex >= frames.length) {
      typing = false;
      loadingText.textContent = "> Loading";
      dots.style.display = "inline-block"; // فعال شدن انیمیشن نقطه‌ها
    }
  }

  // پیشرفت بار
  if (progress < 100) {
    progress += 2;
    progressBar.style.width = progress + "%";
    progressText.textContent = progress + "%";
  } else {
    clearInterval(interval);
    // وقتی کامل شد
    loadingText.textContent = "✓ Completed!";
    loadingText.classList.add("success");
    dots.style.display = "none";
    progressBar.style.background = "limegreen";
    progressText.textContent = "100%";
  }
}, 200);
