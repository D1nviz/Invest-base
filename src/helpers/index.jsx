import { TweenMax } from "gsap/gsap-core";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
  
  Array.from(split.querySelectorAll('.letter')).forEach((el, idx) => {
    TweenMax.from(el, 2.5, {
      opacity: 0,
      scale: .1,
      x: random(-500, 500),
      y: random(-500, 500),
      z: random(-500, 500),
      delay: idx * 0.01,
      repeat: 0,
      onUpdate: ()=> {
        el.style.opacity = 1;
      }
    },)
  });
};
export const animateTitle = (titleRef) => {
  gsap.fromTo(titleRef.current, {
    y: -200,
    opacity: 0
  },{
    y: 0,
    opacity: 1,
    duration: 2.5
  })
};

export const animateSlides = () => {
  gsap.registerPlugin(ScrollTrigger);
  let slides = gsap.utils.toArray(".slide");
    slides.forEach(slide => ScrollTrigger.create({ trigger: slide, start: "top top" }));

    slides.forEach(slide => {
      gsap.fromTo(slide, {
        opacity: 1,
      }, {
        opacity: .2,
        duration: 1,
        scrollTrigger: {
          trigger: slide,
          start: "top top",
          end: "+=100%",
          scrub: true,
          pin: true,
          pinSpacing: false,
          onUpdate: (self) => {
            const progress = self.progress.toFixed(2); 
            const scale = 1 - (progress * 0.2); 
            slide.style.transform = `scale(${scale})`;
          },
        },
      });
    });
}