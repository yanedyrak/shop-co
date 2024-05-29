import { Star } from "../shared/Star";
import { PriceWithDiscount } from "../shared/ui/PriceWIthDiscount";

export const Card = ({ a }) => {
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
        {Array(4).fill(<Star />)} 4.5/5
      </p>
      {a ? (
        <PriceWithDiscount />
      ) : (
        <p className="mt-[8px] text-xl font-bold">$120</p>
      )}
    </div>
  );
};
