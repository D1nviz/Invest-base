import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useAnimation = (isOnScreen, ref) => {
  useEffect(() => {
    if (isOnScreen) {
      gsap.to(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%", 
        },
        y: 0,
        opacity: 1,
        duration: 1
      });
    } else {
      gsap.to(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
        },
        y: -20,
        opacity: 0,
        duration: 1
      });
    }
  }, [isOnScreen])
}

export default useAnimation;