import { CartSVG } from "../shared/ui/header/CartSVG";
import { UserSVG } from "../shared/ui/header/UserSVG";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

import { SearchSVG } from "../shared/ui/header/SearchSVG";
export const Header = () => {
  return (
    <nav className="px-[100px] py-[30px] text-black flex justify-between align-middle  sm:px-7">
      <button
        type="button"
        className="border-none bg-transparent hidden lg:block"
      >
        <MenuOutlined className="text-[25px]" />
      </button>
      <Link to="/">
        <h1 className="font-bold text-[40px] sm:text-[20px]">SHOP.CO</h1>
      </Link>
      <div className="flex gap-6 lg:hidden">
        <Link to="/catalog" className="font-light my-[auto] text-xl">
          Shop
        </Link>
        <Link to="/catalog" className="font-light my-[auto] text-xl">
          On sale
        </Link>
        <Link to="/catalog" className="font-light my-[auto] text-xl">
          New Arrivals
        </Link>
        <Link to="/catalog" className="font-light my-[auto] text-xl">
          Brands
        </Link>
      </div>

      <input
        className="text-xl pl-[2%] pr-[15%] pt-[12px] pb-[14px] bg-[#f0f0f0] rounded-[62px] lg:hidden"
        type="text"
        placeholder="Search for products..."
      />
      <div className="flex gap-6 my-auto">
        <button className="relative hidden lg:block" type="button">
          <SearchSVG width="34" height="34" />
        </button>
        <button>
          <CartSVG width={34} height={34} />
        </button>
        <button>
          <UserSVG width={34} height={34} />
        </button>
      </div>
    </nav>
  );
};
