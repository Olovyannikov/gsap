import bezier from "../vendor/bezier";
import gsap from "gsap";

export default () => {
    const imageSlides = document.querySelectorAll('.slide-bg__inner');
    const shapeSlides = document.querySelectorAll('.shapes__item');
    const mouse = document.querySelector('.mouse');
    const slideBg = document.querySelector('.slide-bg');
    const links = document.querySelectorAll('a');
    const easing = bezier(0.770, 0.125, 0.265, 1.040);

    const startComplete = () => {
        imageSlides.forEach(el => el.style.opacity = 1);
        shapeSlides.forEach(el => el.style.opacity = 1);
    }

    const startingTl = gsap.timeline({defaults: {ease: easing}, onComplete: startComplete});
}
