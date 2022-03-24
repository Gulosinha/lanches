const pegaRad1 = document.querySelector('#rad1');
const pegaCont = document.querySelector('.container');

pegaRad1.addEventListener('click', ()=>{
  pegaCont.style.height="300vw";
});

const pegaRad2 = document.querySelector('#rad2');

pegaRad2.addEventListener('click', ()=>{
  pegaCont.style.height="372vw";
});

const pegaRad3 = document.querySelector('#rad3');

pegaRad3.addEventListener('click', ()=>{
  pegaCont.style.height="230vw";
});
