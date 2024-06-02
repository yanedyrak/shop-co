import React from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { Color } from "./Color";

const items: MenuProps["items"] = [
  {
    label: <Color f={() => {}} color="blue" isActive={true} />,
    key: "0",
  },
  {
    label: <Color f={() => {}} color="red" isActive={true} />,
    key: "1",
  },
  {
    label: <Color f={() => {}} color="green" isActive={true} />,
    key: "2",
  },
  {
    label: <Color f={() => {}} color="white" isActive={true} />,
    key: "3",
  },
  {
    label: <Color f={() => {}} color="black" isActive={true} />,
    key: "4",
  },
  {
    label: <Color f={() => {}} color="yellow" isActive={true} />,
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
