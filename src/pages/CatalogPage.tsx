import { Header } from "../widgets/Header";
import { SideFilter } from "../shared/ui/SideFilter";
import { CatalogProducts } from "../shared/ui/CatalogProducts";
import PhoneFilter from "../shared/ui/PhoneFilter";

export const CatalogPage = () => {
  return (
    <>
      <Header />
      <PhoneFilter />
      <div className="w-full">
        <div className="px-[100px] mx-auto flex flex-row  gap-10 ">
          <SideFilter />
          <CatalogProducts />
        </div>
      </div>
    </>
  );
};
