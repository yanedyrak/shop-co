import React from "react";
import { Color } from "../shared/ui/Color";
import { Header } from "../widgets/Header";
import { Size } from "../shared/ui/Size";
import { ButtonAddToCart } from "../shared/ui/ButtonAddToCart";
import { SideFilter } from "../shared/ui/SideFilter";
import { CatalogProducts } from "../shared/ui/CatalogProducts";

export const CatalogPage = () => {
  return (
    <>
      <Header />
      <div className="w-full">
        <div className="px-[100px] mx-auto flex flex-row  gap-10 ">
          <SideFilter />
          <CatalogProducts />
        </div>
      </div>
    </>
  );
};
