import { Header } from "../widgets/Header";

import { CatalogProducts } from "../shared/ui/CatalogProducts";

export const CatalogPage = () => {
  return (
    <>
      <Header />

      <div className="w-full">
        <CatalogProducts />
      </div>
    </>
  );
};
