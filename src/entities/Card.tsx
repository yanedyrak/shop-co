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
    <div className="mx-auto w-[350px] text-left duration-500 cursor-pointer hover:brightness-75">
      <div className="bg-[#F0EEED] h-[320px]  flex justify-center rounded-2xl">
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
        <p className="text-xl font-bold">${priceWithoutDiscount}</p>
      )}
    </div>
  );
};
