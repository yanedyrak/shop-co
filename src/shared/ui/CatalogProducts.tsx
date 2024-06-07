import { Card } from "../../entities/Card";
import PhoneFilter from "./PhoneFilter";
import { SideFilter } from "./SideFilter";

export const CatalogProducts = () => {
  return (
    <div className="mx-auto">
      <div className="px-[100px] mx-auto flex flex-row  gap-10 lg:flex-col xs:px-0">
        <div className="lg:hidden">
          <SideFilter />
        </div>
        <div className="hidden justify-between align-middle px-[50px] lg:flex ">
          <div className="text-3xl font-bold my-auto"> Name</div>
          <PhoneFilter />
        </div>

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
    </div>
  );
};
