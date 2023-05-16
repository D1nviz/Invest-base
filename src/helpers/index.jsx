import { TweenMax } from "gsap/gsap-core";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const amimateDesctiption = (descriptionRef) => {
  const splitText = (el) => {
    el.innerHTML = el.textContent.replace(/(\S*)/g, m => {
      return `<div class="word">` +
        m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div class='letter'>$&</div>") +
        `</div>`;
    });
    return el;
  };

  const split = splitText(descriptionRef.current);

  function random(min, max) {
    return (Math.random() * (max - min)) + min;
  }

  Array.from(split.querySelectorAll('.letter')).forEach((el, i) => {
    TweenMax.from(el, 2.5, {
      opacity: 0,
      scale: .1,
      x: random(-300, 300),
      y: random(-300, 300),
      z: random(-300, 300),
      delay: i * 0.01,
      repeat: 0,
      onUpdate: () => {
        el.style.opacity = 1;
      }
    },)
  });
};
export const animateRef = (ref, height) => {
  gsap.fromTo(ref.current, {
    y: -height,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    duration: 2.5
  })
};

export const animateSlides = () => {
  
  let slides = gsap.utils.toArray(".slide");
  slides.forEach(slide => ScrollTrigger.create({ trigger: slide, start: "top top" }));

  slides.forEach(slide => {
    gsap.fromTo(slide, {
      opacity: 1,
    }, {
      duration: 1,
      scrollTrigger: {
        trigger: slide,
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
        pinSpacing: false,
        onUpdate: ({ progress }) => {
          const scale = 1 - (progress.toFixed(2) * .2);
          slide.style.transform = `scale(${scale})`;
        },
      },
    });
  });
}


