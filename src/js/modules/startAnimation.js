import bezier from "../vendor/bezier";
import gsap from "gsap";

const imageSlides = document.querySelectorAll('.slide-bg__inner');
const shapeSlides = document.querySelectorAll('.shapes__item');
const easing = bezier(0.770, 0.125, 0.265, 1.040);

const startComplete = () => {
    imageSlides.forEach(el => el.style.opacity = 1);
    shapeSlides.forEach(el => el.style.opacity = 1);
}

const startingTl = gsap.timeline({defaults: {ease: easing}, onComplete: startComplete});


const startAnimation = () => {
    console.log('start');

    const currentSlide = document.querySelector('.slide-bg__inner_current');
    const currentShape = document.querySelector('.shapes__item_current');
    const currentText = document.querySelector('.slides-container__slide_active');
    startingTl.to('.header', 0.5, {
        opacity: 1,
        y: 0,
        delay: 0.5
    })
        .to('.main-section__explore', 0.5, {
            opacity: 1,
            y: 0,
        }, '-=0.5')
        .to(currentText.querySelector('.slides-container__title'), 0.6, {
            opacity: 1,
            y: 0,
        }, '-=0.1')
        .to(currentText.querySelector('.designers-info'), 0.6, {
            opacity: 1,
            y: 0,
        }, '-=0.4')
        .from(currentSlide, 0.4, {
            xPercent: 100
        }, '-=0.4')
        .from(currentSlide.querySelector('.slide-bg__link'), 0.4, {
            xPercent: -100
        }, '-=0.4')
        .from(currentShape, 0.6, {
            xPercent: 100
        }, '-=0.2')
        .from(currentSlide.querySelector('.shapes__content'), 0.6, {
            xPercent: -100,
            delay: -0.6
        }, '-=0.2')
}

export {startAnimation}
