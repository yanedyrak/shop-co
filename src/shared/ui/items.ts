import { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

export const items: MenuItem[] = [
  {
    key: "sub",
    label: "Filter",
    children: [
      {
        key: "sub1",
        label: "T-shirt",
      },

      {
        key: "sub2",
        label: "Shorts",
      },
      {
        key: "sub3",
        label: "Shirts",
      },
      {
        key: "sub4",
        label: "Hoodie",
      },
      {
        key: "sub5",
        label: "Jeans",
      },
    ],
  },
  {
    type: "divider",
  },
];
