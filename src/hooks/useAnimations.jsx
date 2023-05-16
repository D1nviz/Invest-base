import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useAnimation = (isOnScreen, ref) => {
  useEffect(() => {
    gsap.fromTo(
      ref.current,
      {
        scrollTrigger: {
          trigger: ref.current,
        },
        y: -35,
        opacity: .2,
      },
      {
        scrollTrigger: {
          trigger: ref.current,
        },
        y: 0,
        opacity: 1,
        duration: 1.5
      }
    );
  }, [isOnScreen]);
}

export const useAnimateLock = (isOnScreen, top, bottom) => {
  useEffect(() => {
    if (isOnScreen) {
      gsap.fromTo(top.current, {
        rotate: -35,
        y: -6,
        duration: .5,
        x: -5,
      },
      {
        x: 0,
        y: 0,
        rotate: 0,
        ease: "Power4.easeIn",
        duration: .5,
        delay: .2
      });
      gsap.fromTo(bottom.current, {
        rotate: 35,
        y: 10,
        duration: .5,
        x: -5,
      },
      {
        x: 0,
        y: 0,
        rotate: 0,
        ease: "Power2.easeIn ",
        duration: .5,
        delay: .2
        
      });
    }
  }, [isOnScreen]);
}
