const leftArrow       = document.querySelector('.video__header_buttons-left'),
      rightArrow      = document.querySelector('.video__header_buttons-right'),
      slider          = document.querySelector('.video__slider'),
      picture         = document.querySelector('.video__slider_el');
let   slideNumber     = 0,
      shiftPosition   = 0,
      shiftValue      = picture.offsetWidth + 50;

rightArrow.addEventListener('click', function() {

    if (slideNumber === 3) {
        return;
    }
    shiftPosition += -(shiftValue);
    slider.style.transform = `translateX(${shiftPosition}px)`;
    slideNumber ++;
});

leftArrow.addEventListener('click', function() {

    if (slideNumber === 0) {
        return;
    }
    shiftPosition += (shiftValue);
    slider.style.transform = `translateX(${shiftPosition}px)`;
    slideNumber--;
});