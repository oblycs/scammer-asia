// IP fetch
fetch("https://api.ipify.org?format=json")
  .then(res => res.json())
  .then(data => {
    document.getElementById("ip").textContent = `[ ${data.ip} ]`;
  });

// Click to enter
document.addEventListener("click", () => {
  document.getElementById("intro").style.display = "none";
  document.getElementById("main").classList.remove("hidden");
});

// Typing effect for bio
const bioText = `FFlag Master Op Cool 777 Godlike Truth Not Lie good fantastic real /gamemode 1 level 999 cheater bloxstrap IT hacking super mega smoker .`;
const bioElement = document.getElementById("bio-text");
let i = 0;
let forward = true;

function typeWriter() {
  if (forward) {
    bioElement.textContent = bioText.substring(0, i);
    i++;
    if (i > bioText.length) {
      forward = false;
