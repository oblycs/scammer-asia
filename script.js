// --- Эффект печатания текста с радужным свечением ---
const text = `FFlag Master Op Cool 777 Godlike Truth Not Lie
Good, fantastic, real /gamemode 1 level 999
Cheater, bloxstrap, IT hacking, super mega smoker`;

const element = document.getElementById("typewriter");
let i=0, isDeleting=false;
const colors = ["#ff0000","#ff7f00","#ffff00","#00ff00","#00ffff","#0000ff","#8b00ff"];

function typeEffect(){
  if(!isDeleting){
    const char=text.charAt(i);
    const color=colors[i%colors.length];
    element.innerHTML=text.substring(0,i)+`<span class="glow" style="color:${color}">${char}</span>`;
    i++;
    if(i===text.length)setTimeout(()=>{isDeleting=true;},1500);
  }else{
    element.textContent=text.substring(0,i-1);
    i--;
    if(i===0)isDeleting=false;
  }
  const speed=isDeleting?50:80;
  setTimeout(typeEffect,speed);
}
typeEffect();

// --- Эффект наклона био ---
const bioBox=document.getElementById("bio-box");
bioBox.addEventListener("mousemove",e=>{
  const rect=bioBox.getBoundingClientRect();
  const x=e.clientX-rect.left;
  const y=e.clientY-rect.top;
  const rotateX=((y-rect.height/2)/(rect.height/2))*8;
  const rotateY=((x-rect.width/2)/(rect.width/2))*-8;
  bioBox.style.transform=`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
});
bioBox.addEventListener("mouseleave",()=>{bioBox.style.transform="rotateX(0deg) rotateY(0deg) scale(1)";});

// --- Анимация появления ---
window.addEventListener("load",()=>{document.body.classList.add("loaded");});

// --- Музыка с двумя состояниями кнопки ---
const music=document.getElementById("bg-music");
const musicToggle=document.getElementById("music-toggle");
let isPlaying=false;
musicToggle.classList.add('paused');
musicToggle.innerHTML='<i class="fa-solid fa-volume-xmark"></i>';
musicToggle.addEventListener("click",()=>{
  if(isPlaying){
    music.pause();
    isPlaying=false;
    musicToggle.classList.remove('playing');
    musicToggle.classList.add('paused');
    musicToggle.innerHTML='<i class="fa-solid fa-volume-xmark"></i>';
  }else{
    music.play();
    isPlaying=true;
    musicToggle.classList.remove('paused');
    musicToggle.classList.add('playing');
    musicToggle.innerHTML='<i class="fa-solid fa-volume-high"></i>';
  }
});
