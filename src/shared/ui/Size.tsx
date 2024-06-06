export const Size = ({
  children,
  isActive,
}: {
  children: string;
  isActive: boolean;
}) => {
  return (
    <button
      className={`my-3 rounded-[62px] text-2xl duration-300 overflow-hidden flex ${
        isActive ? "bg-[#000] text-white" : "bg-[#fff] text-black"
      } `}
    >
      <p className="px-[24px] py-[12px]">{children}</p>
    </button>
  );
};
