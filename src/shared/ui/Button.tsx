export const Button = ({ children }: { children: string }) => {
  return (
    <button className={"block mx-auto my-20 text-black bg-white border-[rgba(0,0,0,0.1)] border-[1px] px-[54px] py-[16px] duration-300 rounded-[62px] hover:bg-black hover:text-white"}>
      {children}
      </button>)
};
