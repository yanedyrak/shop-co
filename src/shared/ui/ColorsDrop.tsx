import React from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { Color } from "./Color";

const items: MenuProps["items"] = [
  {
    label: <Color color="blue" />,
    key: "0",
  },
  {
    label: <Color color="red" />,
    key: "1",
  },
  {
    label: <Color color="green" />,
    key: "2",
  },
  {
    label: <Color color="white" />,
    key: "3",
  },
  {
    label: <Color color="black" />,
    key: "4",
  },
  {
    label: <Color color="yellow" />,
    key: "5",
  },
];

export const ColorsDrop: React.FC = () => (
  <Dropdown className="pl-[10px]" menu={{ items }} trigger={["click"]}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Colors
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
