window.addEventListener('load', function() {
    if (window.location.hash === '#signup') {
      document.getElementById('flip').checked = true;
    }
});
  
  document.querySelector('.signup-form input[type="submit"]').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('flip').checked = false;
});