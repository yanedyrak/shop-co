import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { setColor } from "../store/CatalogFIlter";
import { Selected } from "./Selected";

export const Color = ({ color }: { color: string }) => {
  const colorValue = useAppSelector((state) => state.CatalogFilter.color);
  const dispatch = useAppDispatch();
  return (
    <div
      onClick={() => {
        dispatch(setColor(color));
      }}
      className={`mx-auto my-[5px] w-[50px] h-[50px] duration-300 rounded-full border-[1px] hover:brightness-75 cursor-pointer`}
      style={{ backgroundColor: `${color}` }}
    >
      {colorValue === color ? (
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
