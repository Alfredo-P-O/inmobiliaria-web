let overlay = document.querySelector('.overlay');
let carousel = document.querySelector('.carousel');
let slides = document.querySelectorAll('.slide');

function loadSlides(){
    for (i = 0; i < slides.length; i++) {
        slides[i].style.left = carousel.offsetWidth * -i + 'px';
    }
}
function toggleModel(){
    if (carousel.style.display === 'none') {
        overlay.style.display = 'block';
        carousel.style.display = 'block';
        loadSlides(); 
    }else{
        overlay.style.display = 'none';
        carousel.style.display = 'none';
    }
}
// function openModel(){
//     overlay.style.display = 'block';
//     carousel.style.display = 'block';
//     loadSlides();
// }
// function closeModel(){
//     overlay.style.display = 'none';
//     carousel.style.display = 'none';
// }
function nextSlides(){
    for (i = 0; i < slides.length; i++) {
        slides[i].style.left = slides[i].offsetLeft + carousel.offsetWidth + 'px';
    }
}