document.addEventListener('DOMContentLoaded', function() {
  const video = document.getElementById('background-video');
  

  video.pause();
  video.currentTime = 0;

  function reproducirVideo () {
      video.playbackRate = 2.0;
      video.play()
  }


  // Añadir eventos de clic a los elementos del menú
  document.getElementById('item1').addEventListener('click', reproducirVideo);
  document.getElementById('item2').addEventListener('click', reproducirVideo);
  document.getElementById('item3').addEventListener('click', reproducirVideo);
  document.getElementById('item4').addEventListener('click', reproducirVideo);
});


document.getElementById('item1').addEventListener('click', function(event) {
  event.preventDefault();
  setTimeout(function() {
    window.location.href = 'about.html';
  }, 2300);
});

document.getElementById('item2').addEventListener('click', function(event) {
  event.preventDefault();
  setTimeout(function() {
    window.location.href = 'services.html';
  }, 2300);
});

document.getElementById('item3').addEventListener('click', function(event) {
  event.preventDefault();
  setTimeout(function() {
    window.location.href = 'projects.html';
  }, 2300);
});

document.getElementById('item4').addEventListener('click', function(event) {
  event.preventDefault();
  setTimeout(function() {
    window.location.href = 'contact.html';
  }, 2300);
});
