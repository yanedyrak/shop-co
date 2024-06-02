import { Selected } from "./Selected";

export const Color = ({
  f,
  color,
  isActive,
}: {
  f: any;
  color: string;
  isActive: boolean;
}) => {
  return (
    <div
      onClick={f}
      className={` inline-block w-[50px] h-[50px] duration-300 rounded-full border-[1px] hover:brightness-75 cursor-pointer`}
      style={{ backgroundColor: `${color}` }}
    >
      {isActive ? (
        <div className="w-full h-full flex items-center justify-center">
          {color === "white" ? (
            <Selected fill="black" />
          ) : (
            <Selected fill="white" />
          )}
        </div>
      ) : null}
    </div>
  );
};
