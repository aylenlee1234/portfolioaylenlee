document.addEventListener("DOMContentLoaded", function() {
    const carouselImages = document.querySelector('.carousel-images');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
  
    let counter = 0;
    const imageWidth = document.querySelector('.carousel').clientWidth;
  
    nextBtn.addEventListener('click', function() {
      if (counter >= carouselImages.children.length - 1) return;
      counter++;
      carouselImages.style.transform = `translateX(${-imageWidth * counter}px)`;
    });
  
    prevBtn.addEventListener('click', function() {
      if (counter <= 0) return;
      counter--;
      carouselImages.style.transform = `translateX(${-imageWidth * counter}px)`;
    });
  });
  