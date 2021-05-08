import bezier from "../vendor/bezier";
import gsap from "gsap";

const imagesSlides = (direction) => {
    const imageSlides = document.querySelectorAll('.slide-bg__inner');
    const easing = bezier(0.770, 0.125, 0.265, 1.040);
    let currentSlide = document.querySelector('.slide-bg__inner_current');
    let nextSlide;
    direction === 'down' ? nextSlide = currentSlide.nextElementSibling : nextSlide = currentSlide.previousElementSibling;

    if (nextSlide) {
        imageSlides.forEach(el => el.classList.remove('index'))

        currentSlide.classList.add('index');

        const tl = gsap.timeline({
            defaults: {ease: easing},
            onComplete: function () {
                currentSlide.classList.remove('index')
            }
        })
        tl.from(nextSlide, 0.5, {
            xPercent: 100
        })
            .from(nextSlide.querySelector('.slide-bg__link'), 0.5, {
                xPercent: -100,
                delay: -0.5
            })
        currentSlide.classList.remove('slide-bg__inner_current');
        nextSlide.classList.add('slide-bg__inner_current');
    }
}

export {imagesSlides}
