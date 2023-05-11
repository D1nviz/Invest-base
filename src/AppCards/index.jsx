import {
  CardsSection,
  CardContainer,
  Card,
  CardImgContainer,
  CardTitle,
  CardDescription
} from "./styles";
import { cards } from "../Constants";

const renderCards = cards.map(({ id, title, description, thumbnail }) => (
  <Card key={id}>
    <CardImgContainer>
      <img src={thumbnail} alt={thumbnail} />
    </CardImgContainer>
    <CardTitle>{title}</CardTitle>
    <CardDescription>{description}</CardDescription>
  </Card>
));

const AppCards = () => {
  return (
    <CardsSection >
      <CardContainer>
        {renderCards}
      </CardContainer>
    </CardsSection>
  )
}
export default AppCards;