import bezier from "../vendor/bezier";
import gsap from "gsap";

const shapesSlides = (direction) => {
    const shapeSlides = document.querySelectorAll('.shapes__item');
    const easing = bezier(0.770, 0.125, 0.265, 1.040);
    let currentSlide = document.querySelector('.shapes__item_current');
    let nextSlide;
    direction === 'down' ? nextSlide = currentSlide.nextElementSibling : nextSlide = currentSlide.previousElementSibling;

    if (nextSlide) {
        shapeSlides.forEach(el => el.classList.remove('index'))

        currentSlide.classList.add('index');

        const tl = gsap.timeline({
            defaults: {ease: easing},
            onComplete: function () {
                currentSlide.classList.remove('index')
            }
        })
        tl.from(nextSlide, 0.5, {
            xPercent: 100,
            delay: 0.5
        })
            .from(nextSlide.querySelector('.shapes__content'), 0.5, {
                xPercent: -100,
                delay: -1
            })
        currentSlide.classList.remove('shapes__item_current');
        nextSlide.classList.add('shapes__item_current');
    }
}

export {shapesSlides}
