//vendors
import bezier from "./vendor/bezier";
import {default as swipedEvents} from './vendor/swiped-events';

bezier();
swipedEvents();

//modules
import {default as settings} from './modules/settings';
// import startAnimation from './modules/startAnimation';
// import mouse from './modules/mouse';
import {bgSlides} from './modules/bgSlides';
// import imagesSlides from './modules/imagesSlides';
// import textSlides from './modules/textSlides';
// import shapesSlides from './modules/settings';


const init = () => {
    const helperInput = document.querySelector('#helper-input');
    settings();

    const showNextSlide = () => {
        bgSlides('down')
    }

    const showPrevSlide = () => {
        bgSlides('up')
    }

    if (window.innerWidth >= 768) {
        window.addEventListener('wheel', e => {
            let delta = -e.deltaY;
            if (delta > 0) {
                if (helperInput.value === '1') {
                    console.log('scroll up')
                    helperInput.value = 0;
                    showPrevSlide();
                    setTimeout(() => {
                        helperInput.value = 1
                    }, 1500)
                }
            } else {
                if (helperInput.value === '1') {
                    console.log('scroll down')
                    helperInput.value = 0;
                    showNextSlide();
                    setTimeout(() => {
                        helperInput.value = 1;
                    }, 1500)
                }
            }
        })
    }
    else  {
        document.addEventListener('swiped-left', () => {
            showNextSlide();
        });
        document.addEventListener('swiped-right', () => {
            showPrevSlide();
        })
    }
}

init();
