import {useEffect} from "react";
import {gsap} from "gsap";

const useCardsAnimation = (isOnScreen, ref) => {
    useEffect(() => {
        if (isOnScreen) {
            gsap.to(ref.current, {
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top center",
                    toggleActions: "restart none reverse resume"
                },
                y: 0,
                opacity: 1,
                duration: .5
            });
        } else {
            gsap.to(ref.current, {
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top center",
                    toggleActions: "restart pause reverse pause"
                },
                y: -50,
                opacity: 0,
                duration: .5
            });
        }
    }, [isOnScreen])
}

export default useCardsAnimation;