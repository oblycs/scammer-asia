// --- Эффект печатания ---
const text = `⚡ Welcome to FFlag Master ⚡
Truth. Power. Innovation.
Level 999 | Hacker Mode ON`;

const element = document.getElementById("typewriter");
let i = 0;
let isDeleting = false;

function typeEffect() {
  if (!isDeleting) {
    const char = text.charAt(i);
    element.innerHTML = text.substring(0, i)
      + `<span class="glow">${char}</span>`;
    i++;
    if (i === text.length) {
      setTimeout(() => { isDeleting = true; }, 2000);
    }
  } else {
    element.textContent = text.substring(0, i - 1);
    i--;
    if (i === 0) {
      isDeleting = false;
    }
  }
  const speed = isDeleting ? 40 : 70;
  setTimeout(typeEffect, speed);
}
typeEffect();

// --- Музыка: вкл/выкл ---
const music = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");
const musicIcon = musicToggle.querySelector("i");

musicToggle.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicIcon.classList.replace("fa-volume-mute", "fa-volume-up");
  } else {
    music.pause();
    musicIcon.classList.replace("fa-volume-up", "fa-volume-mute");
  }
});
