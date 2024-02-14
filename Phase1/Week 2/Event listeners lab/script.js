const addEventListener = (selector, event, callback) => {
    const element = document.querySelector(selector);
    if (element) {
       element.addEventListener(event, callback);
    }
   };
   
   addEventListener('#input', 'click', function() {
    alert('I was clicked!');
   });const slideContainer = document.querySelector('#slider');
   const slides = document.querySelectorAll('#slider .slide');
   const buttons = document.querySelectorAll('#slider .slide-button');
   
   const images = [
    'Images/animated1.jpeg',
    'Images/animated2.jpeg',
    'Images/animated3.jpeg',
    
   ];
   
   let currentIndex = 0;
   
   slides.forEach((slide, index) => {
    slide.style.backgroundImage = `url(${images[index]})`;
    buttons[index].addEventListener('click', () => {
       slideContainer.style.transform = `translateX(-${index * 100}%)`;
       currentIndex = index;
    });
   });
   
   function showCurrentSlide() {
    slides.forEach((slide, index) => {
       slide.style.display = index === currentIndex ? 'block' : 'none';
    });
   }
   
   showCurrentSlide();
