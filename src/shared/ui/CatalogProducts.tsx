import { Card } from "../../entities/Card";

export const CatalogProducts = () => {
  return (
    <div className="mx-auto">
      <div className="text-3xl mb-[30px] font-bold">NAME</div>
      <div className="grid w-full grid-cols-3 2xl:grid-cols-2 gap-6">
        {Array(124)
          .fill(0)
          .map((_, index) => (
            <Card
              key={index}
              rating={5}
              isDiscount={false}
              priceWithDiscount={20}
              priceWithoutDiscount={30}
            />
          ))}
      </div>
    </div>
  );
};
