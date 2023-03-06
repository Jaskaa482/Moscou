import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/v9I87-aOv7X0ca5h/scene.splinecode');



setTimeout(function () {
    // Completar la operación de carga aquí
    preloader.style.display = "none";
}, 6000);

setTimeout(function () {
    document.body.style.overflow = "hidden";
}, 0);

setTimeout(function () {
    document.body.style.overflow = "auto";
}, 6000);






// const image = document.querySelector('.coet');
// let zoomLevel = 1;

// document.addEventListener('scroll', zoomImage);

// function zoomImage(event) {
//   const delta = Math.sign(event.deltaY);
//   if (delta > 0) {
//     zoomLevel -= 0.1;
//   } else {
//     zoomLevel += 0.1;
//   }
//   image.style.transform = `scale(${zoomLevel})`;

// }


// window.addEventListener('scroll', () => {
//     const scrollPos = window.scrollY;
//     if (scrollPos >= 650) {
//       zoomLevel = 15;
//     } else {
//       zoomLevel = 1;
//     }
//     image.style.transform = `scale(${zoomLevel})`;
// });
