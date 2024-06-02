import React from "react";
import { ConfigProvider, Menu, Slider } from "antd";

import { items } from "./items";
import { ColorsDrop } from "./ColorsDrop";
export const SideFilter: React.FC = () => {
  const [sliderValue, setSliderValue] = React.useState([20, 130]);
  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
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
      <div className="w-[500px]">
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
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
        <ColorsDrop />
      </div>
    </ConfigProvider>
  );
};
