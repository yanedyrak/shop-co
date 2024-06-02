import { CatalogPage } from "../../pages/CatalogPage";
import { MainPage } from "../../pages/MainPage";
export const paths = [
  {
    path: "/",
    name: "home",
    page: <MainPage />,
  },
  {
    path: "/catalog",
    name: "catalog",
    page: <CatalogPage />,
  },
  {
    path: "/catalog/:id",
    name: "product",
  },
];
