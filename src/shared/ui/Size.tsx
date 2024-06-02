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
        isActive ? " bg-[#000] " : " bg-[#ffffff] "
      } ${isActive ? " text-white " : " text-black "} hover:${
        isActive ? "bg-[#fff]" : "bg-[#d0d0d0]"
      }`}
    >
      <p className="px-[24px] py-[12px] opacity-60">{children}</p>
    </button>
  );
};
