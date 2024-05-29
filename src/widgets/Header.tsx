import { CartSVG } from "../shared/ui/header/CartSVG";
import { UserSVG } from "../shared/ui/header/UserSVG";

export const Header = () => {
  return (
    <nav className="px-[100px] py-[30px] text-black flex justify-between align-middle">
      <h1 className="font-bold text-[40px]">SHOP.CO</h1>
      <div className="flex gap-6 ">
        <a className="font-light my-[auto] text-[16px]">Shop</a>
        <a className="font-light my-[auto] text-[16px]">On sale</a>
        <a className="font-light my-[auto] text-[16px]">New Arrivals</a>
        <a className="font-light my-[auto] text-[16px]">Brands</a>
      </div>
      <input
        className="text-xl pl-[2%] pr-[15%] pt-[12px] pb-[14px] bg-[#f0f0f0] rounded-[62px]"
        type="text"
        placeholder="Search for products..."
      />
      <div className="flex gap-6 my-auto">
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
