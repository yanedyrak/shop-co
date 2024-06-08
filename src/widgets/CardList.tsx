import { Card } from "../entities/Card";
import { CardCarousel } from "./CardCarousel";
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
export const CardList = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="block  align-middle text-center">
      <h1 className="my-20 bold text-5xl">{children}</h1>
      <div className="grid grid-cols-4 gap-[20px] xl:hidden">
        {data.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
      <div className="hidden xl:block ">
        <CardCarousel />
      </div>
    </div>
  );
};
