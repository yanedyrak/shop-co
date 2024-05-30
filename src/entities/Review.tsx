import { Star } from "../shared/Star";

export const Review = () => {
  return (
    <div className="border-[2px] rounded-3xl border-[#F0EEED] px-8 py-7 w-96">
      <div className="flex gap-2">{Array(4).fill(<Star />)}</div>

      <div className="mt-4">
        <p className="mb-[12px]">Ilya Kupriets</p>
        <p className="opacity-60">
          "I'm blown away by the quality and style of the clothes I received
          from Shop.co. From casual wear to elegant dresses, every piece I've
          bought has exceeded my expectations.”
        </p>
      </div>
    </div>
  );
};
