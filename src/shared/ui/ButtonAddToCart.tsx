export const ButtonAddToCart = () => {
  return (
    <button className="rounded-[62px] text-2xl  overflow-hidden flex">
      <button className="px-[24px] duration-500  py-[12px] bg-[#f0f0f0]  hover:bg-[#d0d0d0]">
        -
      </button>
      <p className=" bg-[#f0f0f0] px-[24px] py-[12px]">1</p>
      <button className="bg-[#f0f0f0] duration-500 px-[24px] py-[12px]  hover:bg-[#d0d0d0]">
        +
      </button>
    </button>
  );
};
