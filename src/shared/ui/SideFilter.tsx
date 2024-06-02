import React from "react";
import { ConfigProvider, Menu, Slider } from "antd";

import { items } from "./items";
import { ColorsDrop } from "./ColorsDrop";
import { SizesDrop } from "./SizesDrop";
export const SideFilter: React.FC = () => {
  const [sliderValue, setSliderValue] = React.useState([20, 130]);
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
            itemSelectedBg: "#c0c0c0",
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
      <div className="flex flex-col text-2xl w-[500px]">
        <Menu defaultOpenKeys={["sub1"]} mode="inline" items={items} />
        <Slider
          className="text-black"
          onChange={(value) => setSliderValue(value)}
          max={200}
          range={true}
          defaultValue={[20, 130]}
        />
        <div className="text-black text-center text-2xl">
          {`$${sliderValue[0]} - $${sliderValue[1]}`}
        </div>
        <div className="pt-[20px] flex gap-7 justify-center">
          <ColorsDrop />
          <SizesDrop />
        </div>
        <button className="py-[12px]  my-[20px] w-[200px] self-center rounded-[62px] duration-300 bg-black text-white text-[18px] hover:bg-[#f0f0f0] hover:text-black">
          Apply Filter
        </button>
      </div>
    </ConfigProvider>
  );
};
