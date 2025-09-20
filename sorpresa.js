// Efecto máquina de escribir para la frase
const texto ="👉Hoy quiero regalarte estas flores amarillas como símbolo de alegría y gratitud, para recordarte lo especial que eres y lo mucho que valoro tenerte en mi vida. Gracias por tu luz, tu compañía y por hacer que cada día sea más bonito. ¡Feliz día!✨";
let i = 0;
function escribirFrase() {
  if (i < texto.length) {
    document.getElementById("frase").innerHTML += texto.charAt(i);
    i++;
    setTimeout(escribirFrase, 45);
  }
}
escribirFrase();

// Corazones y flores cayendo
const simbolos = ["😍", "🌼", "🌻", "💐", "❤️", "🌸", "🌺"];
function crearMagia() {
  const magia = document.getElementById('magia');
  const elem = document.createElement('span');
  elem.className = 'magico';
  elem.innerText = simbolos[Math.floor(Math.random() * simbolos.length)];
  elem.style.left = Math.random() * 95 + 'vw';
  elem.style.fontSize = (Math.random() * 1.5 + 1.5) + 'em';
  elem.style.animationDuration = (Math.random() * 2 + 3) + 's';
  magia.appendChild(elem);
  setTimeout(() => {
    magia.removeChild(elem);
  }, 4000);
}
setInterval(crearMagia, 250);

// Música
const musica = document.getElementById('musica');
const btnMusica = document.getElementById('btnMusica');
let reproduciendo = false;

function toggleMusica() {
  if (musica.paused) {
    musica.play();
    btnMusica.innerHTML = "⏸️ Pausar";
    reproduciendo = true;
  } else {
    musica.pause();
    btnMusica.innerHTML = "▶️ Reproducir";
    reproduciendo = false;
  }
}
// Para que funcione el autoplay en algunos navegadores
window.addEventListener('click', () => {
  if (!reproduciendo) {
    musica.play();
    btnMusica.innerHTML = "⏸️ Pausar";
    reproduciendo = true;
  }
}, { once: true });

// Más sorpresa
function masSorpresa() {
  for(let i=0; i<20; i++) {
    setTimeout(() => crearMagia(), i*80);
  }
}