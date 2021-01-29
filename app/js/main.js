(function() {
    const leftArrow       = document.querySelector('.video__header_buttons-left'),
          rightArrow      = document.querySelector('.video__header_buttons-right'),
          slider          = document.querySelector('.video__slider'),
          picture         = document.querySelector('.video__slider_el');
    let   slideNumber     = 0,
          shiftPosition   = 0;

    rightArrow.addEventListener('click', function() {

        if (slideNumber === 3) {
            return;
        }

        shiftPosition += -(picture.offsetWidth + 50);
        slider.style.transform = `translateX(${shiftPosition}px)`;
        slideNumber ++;
    });

    leftArrow.addEventListener('click', function() {

        if (slideNumber === 0) {
            return;
        }

        shiftPosition += (picture.offsetWidth + 50);
        slider.style.transform = `translateX(${shiftPosition}px)`;
        slideNumber--;
    });

    window.addEventListener('resize', function() {;
        shiftPosition = -slideNumber * (picture.offsetWidth + 50)
        slider.style.transform = `translateX(${shiftPosition}px)`;
    });



    const   textToggle     = document.querySelector('.header__text-mobile-a'),
            textWrapper    = document.querySelector('.header__text_wrapper'),
            bottomToggle   = document.querySelector('.header__bottom-mobile-a'),
            bottomWrapper  = document.querySelector('.header__bottom_wrapper'),
            infoArrow      = document.querySelector('.header__text-mobile_arrow'),
            serviceArrow   = document.querySelector('.header__bottom-mobile_arrow');

    textToggle.addEventListener('click', function(event) {
        event.preventDefault ? event.preventDefault() : event.returnValue = false;
        textWrapper.classList.toggle('header__text_wrapper-mobile');
        textWrapper.classList.toggle('header__text_wrapper');

        if (infoArrow.style.transform == 'rotate(90deg)') {
            infoArrow.style.transform = 'rotate(0deg)';
            return;
        }

        infoArrow.style.transform = 'rotate(90deg)';
    });

    bottomToggle.addEventListener('click', function(event) {
        event.preventDefault ? event.preventDefault() : event.returnValue = false;
        bottomWrapper.classList.toggle('header__bottom_wrapper-mobile');
        bottomWrapper.classList.toggle('header__bottom_wrapper');

        if (serviceArrow.style.transform == 'rotate(90deg)') {
            serviceArrow.style.transform = 'rotate(0deg)';
            return;
        }

        serviceArrow.style.transform = 'rotate(90deg)';
    });
}());