import DanhSachBenhNhan from "./components/danh-sach-benh-nhan";
import HoTen from "./components/ho-ten";
import TimKiem from "./components/tim-kiem";
import { Grid } from "@mantine/core";

const LeftSidebarContent = () => {
  return (
    <>
      <Grid className="">
        <Grid.Col span={12} py={0} mt={8} h={"fit"}>
          <DanhSachBenhNhan />
          <HoTen />
          <TimKiem />
        </Grid.Col>
      </Grid>
    </>
  );
};

export default LeftSidebarContent;
