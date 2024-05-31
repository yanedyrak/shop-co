interface PriceWithDiscountProps {
  priceWithDiscount: number;
  priceWithoutDiscount: number;
  discount: string;
}
export const PriceWithDiscount = ({
  priceWithDiscount,
  priceWithoutDiscount,
  discount,
}: PriceWithDiscountProps) => {
  return (
    <div className="flex flex-row gap-2">
      <p className="text-xl font-bold">${priceWithDiscount}</p>
      <p className="text-[#9B9B9B] text-xl line-through">
        ${priceWithoutDiscount}
      </p>
      <p className="bg-[#f9dddd] rounded-3xl text-[#f67575] px-2 py-1 text-[14px]">
        -{discount}%
      </p>
    </div>
  );
};
