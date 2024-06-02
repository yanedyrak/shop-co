import { MenuProps } from "antd";

import { Color } from "./Color";

type MenuItem = Required<MenuProps>["items"][number];

export const items: MenuItem[] = [
  {
    key: "sub",
    label: "Filter",
    children: [
      {
        key: "sub1",
        label: "T-shirt",
        children: [
          { key: "1", label: "Option 7" },
          { key: "2", label: "Option 8" },
        ],
      },

      {
        key: "sub2",
        label: "Shorts",
        children: [
          { key: "3", label: "Option 7" },
          { key: "4", label: "Option 8" },
        ],
      },
      {
        key: "sub3",
        label: "Shirts",
        children: [
          { key: "5", label: "Option 7" },
          { key: "6", label: "Option 8" },
        ],
      },
      {
        key: "sub4",
        label: "Hoodie",
        children: [
          { key: "7", label: "Option 7" },
          { key: "8", label: "Option 8" },
        ],
      },
      {
        key: "sub5",
        label: "Jeans",
        children: [
          { key: "9", label: "Option 7" },
          { key: "10", label: "Option 8" },
        ],
      },
    ],
  },
  {
    type: "divider",
  },
];
