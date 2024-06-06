import React, { useState } from "react";
import { Drawer, Space } from "antd";
import { SearchIcon } from "./SearchIcon";
import { SideFilter } from "./SideFilter";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { closeDrawer, openDrawer } from "../store/PhoneDrawer";

const PhoneFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const opened = useAppSelector((state) => state.PhoneDrawer.open);
  return (
    <>
      <Space>
        <SearchIcon onClick={() => dispatch(openDrawer())} />
      </Space>
      <Drawer
        placement={"bottom"}
        height={"90%"}
        onClose={() => dispatch(closeDrawer())}
        open={opened}
      >
        <div className="flex justify-center">
          <SideFilter />
        </div>
      </Drawer>
    </>
  );
};

export default PhoneFilter;
