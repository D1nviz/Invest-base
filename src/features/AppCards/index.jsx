import {useRef} from "react";
import useOnScreen from "../../hooks/useOnScreen"
import useCardsAnimation from "../../hooks/useCardsAnimations"
import {
    CardsSection,
    CardContainer,
    Card,
    CardImgContainer,
    CardTitle,
    CardDescription
} from "./styles";
import {cards} from "../Constants";


const AppCards = () => {

    const cardsRef = useRef();
    const isOnScreen = useOnScreen(cardsRef, "-100px");
    useCardsAnimation(isOnScreen, cardsRef);

    return (
        <CardsSection >
            <CardContainer ref={cardsRef}>
                {cards.map(({ id, title, description, thumbnail }) => (
                    <Card key={id} >
                        <CardImgContainer>
                            <img src={thumbnail} alt={thumbnail} />
                        </CardImgContainer>
                        <CardTitle>{title}</CardTitle>
                        <CardDescription>{description}</CardDescription>
                    </Card>
                ))}
            </CardContainer>
        </CardsSection>
    )
}
export default AppCards;