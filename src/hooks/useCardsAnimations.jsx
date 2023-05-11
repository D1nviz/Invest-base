import { gsap } from "gsap";
import { useEffect } from "react";


const useCardsAnimation = (isOnScreen, ref) => {
  useEffect(() => {
    if (isOnScreen) {
      gsap.to(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          toggleActions: "play"
        },
        y: 0,
        opacity: 1,
        duration: 1
      });
    } else {
      gsap.to(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          toggleActions: "reverse"
        },
        y: -50,
        opacity: 0,
        duration: 1
      });
    }
  }, [isOnScreen])
}

export default useCardsAnimation;