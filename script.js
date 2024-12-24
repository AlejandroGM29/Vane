var audio = document.getElementById("video");
audio.onplay = function () {
  updateStage();
};

async function updateStage() {
  await mostrarMensajeConDuracion(
    "Bueno, estuve pensando mucho y quería dedicarte una canción",
    10 * 1000
  );
  await mostrarMensajeConDuracion(
    "no sabía exactamente cuál, porque sentía que cualquiera sería demasiado intensa, pero esta me gustó",
    16 * 1000
  );
  await mostrarMensajeConDuracion(
    "hay muchas cosas que quería decirte, mucho que quiero expresarte, pero a la vez tampoco sabía cómo hacerlo",
    16 * 1000
  );
  await mostrarMensajeConDuracion(
    "de verdad me llamas la atención, Vane",
    6 * 1000
  );
  await mostrarMensajeConDuracion(
    "estás muy linda o al menos lo que he visto en fotos",
    10 * 1000
  );
  await mostrarMensajeConDuracion(
    "tienes un estilo muy bonito que me encanta, además de que tus facciones se me hacen muy lindas, tienes unas cejas preciosas",
    19 * 1000
  );
  await mostrarMensajeConDuracion(
    "y bueno, sé que no nos conocemos mucho aún, que apenas llevamos semanas hablando, pero lo poco que he conocido de ti me gusta",
    19 * 1000
  );
  await mostrarMensajeConDuracion(
    "tu personalidad, cómo afrontas los problemas",
    8 * 1000
  );
  await mostrarMensajeConDuracion(
    "que estés 'chisquiada', que seas 'racista' JAJAJ y cómo te expresas",
    11 * 1000
  );
  await mostrarMensajeConDuracion(
    "todo eso me parece muy lindo de ti",
    6 * 1000
  );
  await mostrarMensajeConDuracion(
    "y sé que tienes muchos problemas detrás, que hay mucho que tienes que afrontar aún, pero me gustaría poder acompañarte, ¿sabes?",
    21 * 1000
  );
  await mostrarMensajeConDuracion(
    "siento que eres una persona con la que comparto muchas ideas y que de verdad me agrada muchísimo tu forma de ser",
    19 * 1000
  );
  await mostrarMensajeConDuracion(
    "el hablar contigo por mensaje o por llamada, todo eso se pasa volando",
    12 * 1000
  );
  await mostrarMensajeConDuracion(
    "disfruto mucho de ti, de tus conversaciones, de tus enojos, de tus quejas y de tus repentinos cariños",
    16 * 1000
  );
  await mostrarMensajeConDuracion(
    "me muero de ganas de conocerte, de saber más sobre ti, saber qué otras cosas te molestan y cuáles te hacen feliz",
    18 * 1000
  );
  await mostrarMensajeConDuracion(
    "quiero aprender de ti, qué comida te hace feliz probar, qué dulce es tu favorito",
    14 * 1000
  );
  await mostrarMensajeConDuracion(
    "conocer la historia de tus cicatrices y cómo te las habrás hecho, conocer tus pasatiempos",
    15 * 1000
  );
  await mostrarMensajeConDuracion(
    "vaya, conocerte a ti en general y tratar de darte el amor y cariño que algunas veces me has contado que buscas",
    19 * 1000
  );
  await mostrarMensajeConDuracion(
    "me alegro mucho de empezar este próximo año pudiendo aprender sobre ti",
    13 * 1000
  );
  await mostrarMensajeConDuracion(
    "de verdad muchas gracias por todo, Vane, ¡te quiero muchooo!",
    10 * 1000
  );  
}

function mostrarMensajeConDuracion(mensaje, duracion) {
  return new Promise((resolve) => {
    escribirMensaje(mensaje); // Mostrar el mensaje

    setTimeout(function () {
      $("#texto").fadeOut("slow", function () {
        // Desvanecer el mensaje hacia arriba al finalizar la duración
        $(this).text("").show(); // Vaciar el contenido del div de texto y mostrarlo
        resolve(); // Resolver la promesa después de que termine la animación de desvanecimiento
      });
    }, duracion);
  });
}

function escribirMensaje(mensaje) {
  $("#texto").text(""); // Vaciar el contenido del div de texto

  var i = 0;
  var intervalo = setInterval(function () {
    $("#texto").append(mensaje.charAt(i)); // Agregar un carácter del mensaje
    i++;
    if (i > mensaje.length) {
      clearInterval(intervalo); // Detener la animación cuando se haya escrito todo el mensaje
    }
  }, 60); // Intervalo de tiempo entre cada carácter (velocidad de escritura)
}

const starsContainer = document.getElementById("stars");
const shootingStarsContainer = document.getElementById("shooting-stars");
const fireworksContainer = document.getElementById("fireworks-container");

let fireworkColorIndex = 0;
const fireworkColors = [
  "white",
  "blue",
  "yellow",
  "red",
  "green",
  "pink",
  "purple",
  "orange",
];

// Crear estrellas fijas
function createStars() {
  const numStars = 200;
  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    const size = Math.random() * 2 + 1;
    const xPos = Math.random() * 100;
    const yPos = Math.random() * 100;
    const delay = Math.random() * 1;

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${xPos}%`;
    star.style.top = `${yPos}%`;
    star.style.animationDelay = `${delay}s`;

    starsContainer.appendChild(star);
  }
}

// Crear estrellas fugaces
function createShootingStar() {
  const shootingStar = document.createElement("div");
  shootingStar.classList.add("shooting-star");

  const startX = Math.random() * window.innerWidth;
  const startY = Math.random() * (window.innerHeight / 2);

  shootingStar.style.left = `${startX}px`;
  shootingStar.style.top = `${startY}px`;

  shootingStarsContainer.appendChild(shootingStar);

  shootingStar.style.animation = `shooting 1s ease-out forwards`;

  setTimeout(() => {
    shootingStar.remove();
  }, 1000);
}

// Crear fuegos artificiales con colores secuenciales
function createFirework() {
  const numParticles = 30;
  const fireworkCenterX = Math.random() * window.innerWidth; // Coordenada X aleatoria
  const fireworkCenterY = Math.random() * window.innerHeight * 0.5; // Coordenada Y aleatoria (parte superior de la pantalla)

  // Seleccionar el color del fuego artificial de forma secuencial
  const fireworkColor = fireworkColors[fireworkColorIndex];
  fireworkColorIndex = (fireworkColorIndex + 1) % fireworkColors.length;

  for (let i = 0; i < numParticles; i++) {
    const firework = document.createElement("div");
    firework.classList.add("firework");

    const angle = (Math.PI * 2 * i) / numParticles;
    const radius = Math.random() * 100 + 50;
    const offsetX = Math.cos(angle) * radius;
    const offsetY = Math.sin(angle) * radius;

    firework.style.setProperty("--x", `${offsetX}px`);
    firework.style.setProperty("--y", `${offsetY}px`);
    firework.style.left = `${fireworkCenterX}px`;
    firework.style.top = `${fireworkCenterY}px`;
    firework.style.backgroundColor = fireworkColor;

    fireworksContainer.appendChild(firework);

    setTimeout(() => firework.remove(), 1000);
  }
}

// Iniciar animaciones
createStars();
setInterval(() => createShootingStar(), 2000 + Math.random() * 3000);
setInterval(() => createFirework(), 2000 + Math.random() * 3000);
