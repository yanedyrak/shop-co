import { Card } from "../entities/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const data = [
  {
    id: 1,
    isDiscount: true,
    priceWithDiscount: 100,
    priceWithoutDiscount: 200,
    rating: 4.2,
  },
  {
    id: 2,
    isDiscount: false,
    priceWithDiscount: 1200,
    priceWithoutDiscount: 1000,
    rating: 3.7,
  },
  {
    id: 3,
    isDiscount: true,
    priceWithDiscount: 150,
    priceWithoutDiscount: 220,
    rating: 4.5,
  },
  {
    id: 4,
    isDiscount: false,
    priceWithDiscount: 500,
    priceWithoutDiscount: 1000,
    rating: 3.1,
  },
];
export const CardCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive} arrows={false} autoPlay infinite>
      {data.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </Carousel>
  );
};
