document.addEventListener('DOMContentLoaded', function() {
  const video = document.getElementById('background-video');
  

  video.pause();
  video.currentTime = 0;

  function reproducirVideo () {
      video.playbackRate = 2.0;
      video.play()
  }


  // Añadir eventos de clic a los elementos del menú
  document.getElementById('volver-home').addEventListener('click', reproducirVideo);
});

document.getElementById('volver-home').addEventListener('click', function(event) {
  event.preventDefault();
  setTimeout(function() {
    window.location.href = 'index.html';
  }, 2300);
});