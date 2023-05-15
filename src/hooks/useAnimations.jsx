import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useAnimation = (isOnScreen, ref) => {
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

export default useAnimation;