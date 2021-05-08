import bezier from "../vendor/bezier";
import gsap from "gsap";

const textSlides = (direction) => {
    const easing = bezier(0.770, 0.125, 0.265, 1.040);
    let currentSlide = document.querySelector('.slides-container__slide_active');
    let nextSlide;
    direction === 'down' ? nextSlide = currentSlide.nextElementSibling : nextSlide = currentSlide.previousElementSibling;

    if (nextSlide && !nextSlide.classList.contains('main-section__explore')) {

        const tl = gsap.timeline({defaults: {ease: easing}})

        tl.to(currentSlide.querySelector('.slides-container__title'), 0.6, {
            opacity: 0,
            y: 100
        })
            .to(currentSlide.querySelector('.designers-info'), 0.6, {
                opacity: 0,
                y: 100
            }, '-=0.6')
            .to(nextSlide.querySelector('.slides-container__title'), 0.6, {
                opacity: 1,
                y: 0
            }, '-=0.1')
            .to(nextSlide.querySelector('.designers-info'), 0.6, {
                opacity: 1,
                y: 0
            }, '-=0.5')

        currentSlide.classList.remove('slides-container__slide_active');
        nextSlide.classList.add('slides-container__slide_active');
    }
}

export {textSlides}
