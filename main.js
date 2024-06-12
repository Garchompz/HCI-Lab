// Mobile Nav

const nav = document.querySelector('.nav-content');
const burger = document.querySelector('.burger');

function openNav() {
  document.getElementById("overlay-menu").style.height = "100%";
}

function closeNav() {
  document.getElementById("overlay-menu").style.height = "0%";
}

document.querySelector('.burger').addEventListener('click', () => {
  if (burger.classList.contains('toggle')) {
    burger.classList.toggle('toggle'); 
    closeNav()
  } else {
    burger.classList.toggle('toggle');
    openNav()
  }
});

// Carousel

// Get carousel container and images
var carousel = document.querySelector('.carousel-images');
var images = Array.from(carousel.children);

// Get navigation buttons
var prevButton = document.querySelector('.prev');
var nextButton = document.querySelector('.next');

// Set initial index
var currentIndex = 0;

// Add event listener for previous button
prevButton.addEventListener('click', function() {
  // Calculate new index
  var newIndex = currentIndex - 1;
  if (newIndex < 0) {
    newIndex = images.length - 1;  // Wrap around to the last image
  }

  // Update carousel
  carousel.style.transform = 'translateX(' + (-100 * newIndex) + '%)';
  currentIndex = newIndex;
});

// Add event listener for next button
nextButton.addEventListener('click', function() {
  // Calculate new index
  var newIndex = currentIndex + 1;
  if (newIndex >= images.length) {
    newIndex = 0;  // Wrap around to the first image
  }

  // Update carousel
  carousel.style.transform = 'translateX(' + (-100 * newIndex) + '%)';
  currentIndex = newIndex;
});

// Swipe functionality
var startX;
var endX;
carousel.addEventListener('touchstart', function(e) {
  startX = e.touches[0].clientX;
});

carousel.addEventListener('touchmove', function(e) {
  endX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', function() {
  // Calculate distance swiped
  var distance = startX - endX;

  // If distance is positive, user swiped left, so move to next image
  if (distance > 0) {
    nextButton.click();
  }
  // If distance is negative, user swiped right, so move to previous image
  else if (distance < 0) {
    prevButton.click();
  }
});

