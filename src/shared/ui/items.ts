import { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

export const items: MenuItem[] = [
  {
    key: "sub",
    label: "Filter",
    children: [
      {
        key: "t-shirt",
        label: "T-shirt",
      },

      {
        key: "shorts",
        label: "Shorts",
      },
      {
        key: "shirts",
        label: "Shirts",
      },
      {
        key: "hoodie",
        label: "Hoodies",
      },
      {
        key: "jeans",
        label: "Jeans",
      },
    ],
  },
  {
    type: "divider",
  },
];
