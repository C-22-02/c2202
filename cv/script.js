// script.js

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var topButton = document.getElementById("topBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // Для Safari
    document.documentElement.scrollTop = 0; // Для інших браузерів
}

// toggle 
function toggleDarkMode() {
  const icon = document.getElementById('icon');
  const body = document.body;

  body.classList.toggle('dark-mode'); // Toggle dark mode class on body
  icon.classList.toggle('moon'); // Toggle moon class for icon

  // Change icon based on dark mode state
  if (body.classList.contains('dark-mode')) {
    icon.innerHTML = '&#x1F31A;'; // Unicode for sun
  } else {
    icon.innerHTML = '&#x1F319;'; // Unicode for moon
  }
}
