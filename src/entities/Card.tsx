import { Star } from "../shared/Star";
import { PriceWithDiscount } from "../shared/ui/PriceWIthDiscount";

interface CardProps {
  rating: number;
  isDiscount: boolean;
  priceWithDiscount: number;
  priceWithoutDiscount: number;
}
export const Card = ({
  rating,
  isDiscount,
  priceWithDiscount,
  priceWithoutDiscount,
}: CardProps) => {
  return (
    <div className=" w-min">
      <div className="w-[300px] h-[300px] bg-[#F0EEED] flex justify-center rounded-2xl">
        <img
          className="w-[240px] h-[200px] m-auto"
          src="https://cdn.jolybell.com/images/nWfZjCItxcSRSd5.png"
          alt="item"
        />
      </div>
      <h6 className="font-bold text-[20px] mt-[16px]">
        T-shirt with tape Details
      </h6>
      <p
        className="mt-[8px] 
      opacity-60 flex flex-row gap-2 text-lg my-auto
      "
      >
        {Array(Math.ceil(rating)).fill(<Star />)} {rating}/5
      </p>
      {isDiscount ? (
        <PriceWithDiscount
          priceWithDiscount={priceWithDiscount}
          priceWithoutDiscount={priceWithoutDiscount}
          discount={((priceWithDiscount / priceWithoutDiscount) * 100).toFixed(
            1
          )}
        />
      ) : (
        <p className="mt-[8px] text-xl font-bold">{priceWithoutDiscount}</p>
      )}
    </div>
  );
};
