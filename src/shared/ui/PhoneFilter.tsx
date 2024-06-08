import { Drawer, Space } from "antd";
import { FilterSVG } from "./FilterSVG";
import { SideFilter } from "./SideFilter";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useAppSelector } from "../hooks/useAppSelector";
import { closeDrawer, openDrawer } from "../store/PhoneDrawer";
const PhoneFilter = () => {
  const dispatch = useAppDispatch();
  const opened = useAppSelector((state) => state.PhoneDrawer.open);
  return (
    <>
      <Space>
        <FilterSVG onClick={() => dispatch(openDrawer())} />
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
