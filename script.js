document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('start-btn');
  const startScreen = document.getElementById('start-screen');
  const mainContent = document.getElementById('main-content');
  const bgMusic = document.getElementById('bg-music');
  const cards = document.querySelectorAll('.flip-card');

  // Evento al dar click en "tócame pe"
  startBtn.addEventListener('click', () => {
    // 1. Iniciar reproducción de la canción
    if (bgMusic.src && bgMusic.src !== window.location.href) {
      bgMusic.play().catch(error => {
        console.warn('El navegador bloqueó la reproducción automática o no se encontró el archivo de audio:', error);
      });
    }

    // 2. Desvanecer la pantalla del botón
    startScreen.classList.add('fade-out');

    // 3. Mostrar el contenido principal con las imágenes y cartas
    setTimeout(() => {
      startScreen.style.display = 'none';
      mainContent.classList.remove('hidden');
    }, 700);
  });

  // Evento para voltear y des-voltear las 3 cartas centrales al tocarlas
  cards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });
});