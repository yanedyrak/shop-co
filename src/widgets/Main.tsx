import { BlackElement } from "../shared/ui/main/BlackElement";

export const Main = () => {
  return (
    <div className="bg-[#F2F0F1] bg-no-repeat bg-right-bottom w-full bg-person relative">
      <div className="absolute top-[100px] right-[50px]">
        <BlackElement />
      </div>
      <div className="absolute top-[225px] right-[700px]">
        <BlackElement />
      </div>
      <div className="pt-[103px] w-[50%] pl-[100px]">
        <h1 className="font-bold text-[64px] leading-none">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="font-light text-[16px] mt-[32px] opacity-60">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>

        <button className="px-[54px] mt-[32px] text-white rounded-[62px] bg-black py-[16px]">
          Shop now
        </button>
        <div className="mt-[45px] pb-[116px] flex justify-between">
          <div>
            <h2 className="text-[40px] font-bold">200+</h2>
            <p className="opacity-60 font-light text-[16px]">
              International Brands
            </p>
          </div>
          <div>
            <h2 className="text-[40px] font-bold">2,000+</h2>
            <p className="opacity-60 font-light text-[16px]">
              High-Quality Products
            </p>
          </div>
          <div>
            <h2 className="text-[40px] font-bold">30,000+</h2>
            <p className="opacity-60 font-light text-[16px]">Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};
