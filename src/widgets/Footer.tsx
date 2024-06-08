import { Link } from "react-router-dom";
import { PaymentsFooter } from "../shared/ui/footer/PaymentsFooter";

export const Footer = () => {
  return (
    <div className="pt-[140px] pb-[82px] px-[100px] bg-[#f0f0f0] sm:pt-[20px] sm:px-[10px]">
      <div className="flex justify-between mb-[40px] sm:flex-col gap-6 sm:justify-center sm:align-middle sm:text-center">
        <div className="w-72 sm:mx-auto">
          <Link to="/" className="duration-300 opacity-100 hover:opacity-100">
            <h1 className="font-bold text-[32px]">SHOP.CO</h1>
          </Link>
          <p className="font-light text-[14px] mt-[25px] pb-[20px] opacity-6">
            We have clothes that suits your style and which you are proud to
            wear. From women to men.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            to="/"
            className="tracking-widest text-[16px] sm:text-[22px] font-bold"
          >
            COMPANY
          </Link>
          <Link
            to="/"
            className="font-light  opacity-60 text-[16px] duration-300 hover:opacity-100"
          >
            About
          </Link>
          <Link
            to="/"
            className="font-light opacity-60 text-[16px] duration-300 hover:opacity-100"
          >
            Features
          </Link>
          <Link
            to="/"
            className="font-light opacity-60 text-[16px] duration-300 hover:opacity-100"
          >
            Works
          </Link>
          <Link
            to="/"
            className="font-light opacity-60 text-[16px] duration-300 hover:opacity-100"
          >
            Career
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            to="/"
            className="tracking-widest text-[16px] sm:text-[22px] font-bold"
          >
            HELP
          </Link>
          <Link
            to="/"
            className="font-light  opacity-60 text-[16px] duration-300 hover:opacity-100"
          >
            Customer Support
          </Link>
          <Link
            to="/"
            className="font-light opacity-60 text-[16px] duration-300 hover:opacity-100"
          >
            Delivery Details
          </Link>
          <Link
            to="/"
            className="font-light opacity-60 text-[16px] duration-300 hover:opacity-100"
          >
            Terms & Conditions
          </Link>
          <Link
            to="/"
            className="font-light opacity-60 text-[16px] duration-300 hover:opacity-100"
          >
            Privacy Policy
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            to="/"
            className="tracking-widest text-[16px] sm:text-[22px] font-bold"
          >
            FAQ
          </Link>
          <Link
            to="/"
            className="font-light  opacity-60 text-[16px] duration-300 hover:opacity-100"
          >
            Account
          </Link>
          <Link
            to="/"
            className="font-light opacity-60 text-[16px] duration-300 hover:opacity-100"
          >
            Manage Delivers
          </Link>
          <Link
            to="/"
            className="font-light opacity-60 text-[16px] duration-300 hover:opacity-100"
          >
            Orders
          </Link>
          <Link
            to="/"
            className="font-light opacity-60 text-[16px] duration-300  hover:opacity-100"
          >
            Payments
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            to="/"
            className="tracking-widest text-[16px] sm:text-[22px] font-bold"
          >
            RESOURCES
          </Link>
          <Link
            to="/"
            className="font-light  opacity-60 text-[16px] duration-300 hover:opacity-100"
          >
            Development Tutorial
          </Link>
          <Link
            to="/"
            className="font-light opacity-60 text-[16px] duration-300 hover:opacity-100"
          >
            Free eBooks
          </Link>
          <Link
            to="/"
            className="font-light opacity-60 text-[16px] duration-300 hover:opacity-100"
          >
            How to - Blog
          </Link>
          <Link
            to="/"
            className="font-light opacity-60 text-[16px] duration-300 hover:opacity-100"
          >
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
