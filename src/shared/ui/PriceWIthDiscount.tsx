export const PriceWithDiscount = () => {
  return (
    <div className="flex flex-row gap-2">
      <p className="text-xl font-bold">$120</p>
      <p className="text-[#9B9B9B] text-xl line-through">$100</p>
      <p className="bg-[#f9dddd] rounded-3xl text-[#f67575] px-2 py-1 text-[14px]">
        -50%
      </p>
    </div>
  );
};
