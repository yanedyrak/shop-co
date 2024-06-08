import { CalvinKlein } from "./CalvinKlein";
import { Gucci } from "./Gucci";
import { Prada } from "./Prada";
import { Versace } from "./Versace";
import { Zara } from "./Zara";

export const Brands = () => {
  return (
    <div className="px-[100px] bg-black flex justify-center align-middle py-9 gap-10 flex-wrap text-center content-center">
      <Versace />
      <Zara />
      <Gucci />
      <Prada />

      <CalvinKlein />
    </div>
  );
};
