import React from "react";
import { Color } from "../shared/ui/Color";
import { Header } from "../widgets/Header";
import { Size } from "../shared/ui/Size";
import { ButtonAddToCart } from "../shared/ui/ButtonAddToCart";
import { SideFilter } from "../shared/ui/SideFilter";

export const CatalogPage = () => {
  return (
    <>
      <Header />
      <SideFilter />
    </>
  );
};
