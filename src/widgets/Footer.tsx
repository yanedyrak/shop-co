import { Link } from "react-router-dom";
import { PaymentsFooter } from "../shared/ui/footer/PaymentsFooter";

export const Footer = () => {
  return (
    <div className="pt-[140px] pb-[82px] px-[100px] bg-[#f0f0f0]">
      <div className="flex justify-between mb-[40px]">
        <div className="w-72">
          <Link to="/">
            <h1 className="font-bold text-[32px]">SHOP.CO</h1>
          </Link>
          <p className="font-light text-[14px] mt-[25px] opacity-60">
            We have clothes that suits your style and which you are proud to
            wear. From women to men.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Link to="/" className="tracking-widest text-[16px]">
            COMPANY
          </Link>
          <Link to="/" className="font-light  opacity-60 text-[16px]">
            About
          </Link>
          <Link to="/" className="font-light opacity-60 text-[16px]">
            Features
          </Link>
          <Link to="/" className="font-light opacity-60 text-[16px]">
            Works
          </Link>
          <Link to="/" className="font-light opacity-60 text-[16px]">
            Career
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <Link to="/" className="tracking-widest text-[16px]">
            HELP
          </Link>
          <Link to="/" className="font-light  opacity-60 text-[16px]">
            Customer Support
          </Link>
          <Link to="/" className="font-light opacity-60 text-[16px]">
            Delivery Details
          </Link>
          <Link to="/" className="font-light opacity-60 text-[16px]">
            Terms & Conditions
          </Link>
          <Link to="/" className="font-light opacity-60 text-[16px]">
            Privacy Policy
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <Link to="/" className="tracking-widest text-[16px]">
            FAQ
          </Link>
          <Link to="/" className="font-light  opacity-60 text-[16px]">
            Account
          </Link>
          <Link to="/" className="font-light opacity-60 text-[16px]">
            Manage Delivers
          </Link>
          <Link to="/" className="font-light opacity-60 text-[16px]">
            Orders
          </Link>
          <Link to="/" className="font-light opacity-60 text-[16px]">
            Payments
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <Link to="/" className="tracking-widest text-[16px]">
            RESOURCES
          </Link>
          <Link to="/" className="font-light  opacity-60 text-[16px]">
            Development Tutorial
          </Link>
          <Link to="/" className="font-light opacity-60 text-[16px]">
            Free eBooks
          </Link>
          <Link to="/" className="font-light opacity-60 text-[16px]">
            How to - Blog
          </Link>
          <Link to="/" className="font-light opacity-60 text-[16px]">
            Youtube
          </Link>
        </div>
      </div>
      <hr />
      <div className="mt-[40px] flex justify-between">
        <p className=" opacity-60 ">© Shop.co 2000-2024 All Rights Reserved.</p>
        <PaymentsFooter />
      </div>
    </div>
  );
};
