let overlay = document.querySelector('.overlay');
let carousel = document.querySelector('.carousel');
let slides = document.querySelectorAll('.slide');
let imganes = document.querySelectorAll('.carousel .slide img');
let leftArrow = document.querySelector('.left-arrow');
let rightArrow = document.querySelector('.right-arrow');
counter = 0;

function loadSlides(){
    counter = 0;
    updateArrowsState(0);

    carousel.style.height = '90vh';
    let heightCarousel = carousel.offsetHeight;
    for (i = 0; i < imganes.length; i++) {
        if (imganes[i].offsetHeight < heightCarousel){
            heightCarousel = imganes[i].offsetHeight;
        }
    }
    carousel.style.height = heightCarousel + 'px';

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
    updateArrowsState(1)
    for (i = 0; i < slides.length; i++) {
        slides[i].style.left = slides[i].offsetLeft + carousel.offsetWidth + 'px';
    }
}
function prevSlides(){
    updateArrowsState(-1)
    for (i = 0; i < slides.length; i++) {
        slides[i].style.left = slides[i].offsetLeft - carousel.offsetWidth + 'px';
    }
}

function updateArrowsState(e) {
    counter += e;
    if (counter !== 0) {
        leftArrow.style.display = 'flex';
    } else {
        leftArrow.style.display = 'none';
    }
    if (counter === slides.length - 1) {
        rightArrow.style.display = 'none';
    } else {
        rightArrow.style.display = 'flex';
    }
    rightArrow.style.pointerEvents = 'none';
    leftArrow.style.pointerEvents = 'none';
    setTimeout(() => {
        rightArrow.style.pointerEvents = 'auto';
        leftArrow.style.pointerEvents = 'auto';
    }, 900);
}