import React from "react";
import { ConfigProvider, Menu, Slider } from "antd";
import { items } from "./items";
import { ColorsDrop } from "./ColorsDrop";
import { SizesDrop } from "./SizesDrop";
import { useAppSelector } from "../hooks/useAppSelector";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { resetFilter, setCategory, setPrice } from "../store/CatalogFIlter";
export const SideFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const sliderValue = useAppSelector((state) => state.CatalogFilter.price);
  return (
    <ConfigProvider
      theme={{
        components: {
          Dropdown: {
            fontSize: 20,
            controlItemBgHover: "transparent",
          },
          Menu: {
            fontSize: 20,
            itemSelectedBg: "#f9f9f9",
            itemActiveBg: "#000",
            colorPrimary: "#000",
            colorText: "#000",
            colorTextDisabled: "#000",
            colorTextPlaceholder: "#000",
            colorTextDescription: "#000",
          },
          Slider: {
            handleColor: "#000",
            dotActiveBorderColor: "#000",
            trackBg: "#000",
            trackHoverBg: "#000",
            handleActiveColor: "#000",

            railSize: 8,
            handleSize: 15,
            handleSizeHover: 20,
          },
        },
      }}
    >
      <div className="flex flex-col text-2xl w-min">
        <Menu
          defaultOpenKeys={["sub1"]}
          mode="inline"
          onSelect={({ key }) => dispatch(setCategory(key))}
          onDeselect={() => dispatch(setCategory(""))}
          items={items}
        />
        <Slider
          className="text-black"
          onChange={(value) => dispatch(setPrice(value))}
          max={200}
          range={true}
          defaultValue={[20, 130]}
        />
        <div className="text-black text-center text-4xl">
          {`$${sliderValue[0]} - $${sliderValue[1]}`}
        </div>
        <div className="pt-[20px] flex gap-7 justify-center">
          <ColorsDrop />
          <SizesDrop />
        </div>
        <button
          onClick={() => dispatch(resetFilter())}
          className="py-[12px]  my-[20px] w-[200px] self-center rounded-[62px] duration-300 bg-black text-white text-[18px] hover:bg-[#f0f0f0] hover:text-black"
        >
          Apply Filter
        </button>
      </div>
    </ConfigProvider>
  );
};
