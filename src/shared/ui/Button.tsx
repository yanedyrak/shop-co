export const Button = ({ children }: { children: string }) => {
  return (
    <button className="text-black bg-white border-[rgba(0,0,0,0.1)] border-[1px] px-[54px] py-[16px] rounded-[62px]">
      {children}
    </button>
  );
};
