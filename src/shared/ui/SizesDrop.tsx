import React from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

import { Size } from "./Size";

const items: MenuProps["items"] = [
  {
    label: <Size>Medium</Size>,
    key: "0",
  },
  {
    label: <Size>Large</Size>,
    key: "1",
  },
  {
    label: <Size>Extra Large</Size>,
    key: "2",
  },
];

export const SizesDrop: React.FC = () => (
  <Dropdown className=" pl-[10px]" menu={{ items }} trigger={["click"]}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        Size
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);
