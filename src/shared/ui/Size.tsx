import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { setSize } from "../store/CatalogFIlter";
export const Size = ({ children }: { children: string }) => {
  const size = useAppSelector((state) => state.CatalogFilter.size);
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={() => {
        children === size ? dispatch(setSize("")) : dispatch(setSize(children));
      }}
      className={`my-3 rounded-[62px] text-2xl duration-300 overflow-hidden flex ${
        children === size ? "bg-[#000] text-white" : "bg-[#fff] text-black"
      } `}
    >
      <p className="px-[24px] py-[12px]">{children}</p>
    </button>
  );
};
