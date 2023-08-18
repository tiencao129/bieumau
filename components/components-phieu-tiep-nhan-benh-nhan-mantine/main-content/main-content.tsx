import ThongTinChuyenVien from "./components/thong-tin-chuyen-vien";
import DoiTuongBenhNhan from "./components/doi-tuong-benh-nhan";
import ThongTinSinhHieu from "./components/thong-tin-sinh-hieu";
import ThongTinChung from "./components/thong-tin-chung";
import ThongTinBenhNhan from "./components/thong-tin-benh-nhan";
import ConsoleMain from "./console";

import {
  Button,
  Tabs,
  TextInput,
  Checkbox,
  Group,
  Box,
  Grid,
} from "@mantine/core";
import { useForm } from "@mantine/form";

const MainContent = () => {
  const form = useForm({
    initialValues: {
      dienchiphi: "",
      tuyenkham: "",
      sothue: 0,
      sotheBHYT1: "",
      sotheBHYT2: "",
      sotheBHYT3: "",
      sotheBHYT4: "",
      ngayhieuluc: "",
      ngayhethan: "",
      noicap1: "",
      noicap2: "",
      noidangky1: "",
      noidangky2: "",
      makhuvuc: "",
      ngaydu5nam: "",
      phichitra: "",
      hoten: "",
      gioitinh: "",
      ngaysinh: "",
      quoctich: "",
      dantoc: "",
      sonha_tenduong: "",
      tinh_huyen_xa: "",
      thanhthi: "",
      noilamviec: "",
      nghenghiep: "",
      vanhoa: "",
      hotennguoithan: "",
      quanhenguoithan: "",
      sdtnguoithan: "",
      diachinguoithan: "",
      CMND_CCCD_nguoithan: "",
      ghichu: "",
      mabenhnhan: "",
      stttham: "",
      phongkham: "",
      canbotiepnhan: "",
    },

    validate: {
      dienchiphi: (value) =>
        value === "" || undefined || null
          ? "dien chi phi khong duoc trong "
          : null,
      tuyenkham: (value) =>
        value === "" || undefined || null
          ? "tuyen kham khong duoc trong "
          : null,
      sothue: (value: number) =>
        value >= 0 && value <= 100 ? null : alert("so thue 0%-100%"),
      sotheBHYT1: (value) =>
        value === "" ||
        undefined ||
        null ||
        /^[0-9]+$/.test(value) ||
        value.length != 2
          ? "BHYT khong duoc trong"
          : null,
      sotheBHYT2: (value) =>
        value === "" ||
        undefined ||
        null ||
        /^[A-Za-z]+$/.test(value) ||
        value.length != 1
          ? "BHYT khong duoc trong"
          : null,
      sotheBHYT3: (value) =>
        value === "" ||
        undefined ||
        null ||
        /^[A-Za-z]+$/.test(value) ||
        value.length != 2
          ? "BHYT khong duoc trong"
          : null,
      sotheBHYT4: (value) =>
        value === "" ||
        undefined ||
        null ||
        /^[A-Za-z]+$/.test(value) ||
        value.length != 10
          ? "BHYT khong duoc trong"
          : null,
      noicap1: (value) => (value === "" || undefined || null ? "a" : null),
      noicap2: (value) => (value === "" || undefined || null ? "a" : null),
      noidangky1: (value) => (value === "" || undefined || null ? "a" : null),
      noidangky2: (value) => (value === "" || undefined || null ? "a" : null),
      makhuvuc: (value) => (value === "" || undefined || null ? "a" : null),
      ngaydu5nam: (value) => (value === "" || undefined || null ? "a" : null),
      phichitra: (value) => (value === "" || undefined || null ? "a" : null),
    },
  });

  return (
    <>
      <form
        style={{ margin: 0, padding: 0 }}
        onSubmit={form.onSubmit((values) => console.log(values))}
      >
        <Tabs defaultValue="gallery">
          <Tabs.List py={5} fw={600} bg={"gray.1"}>
            <Tabs.Tab value="doituongbenhnha">Đối tượng bệnh nhân</Tabs.Tab>
            <Tabs.Tab value="thongtinbenhnhan">Thông tin bệnh nhân</Tabs.Tab>
            <Tabs.Tab value="thongtinchuyenvien">
              Thông tin chuyển viện
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="doituongbenhnha">
            <DoiTuongBenhNhan form={form} />
            <ThongTinSinhHieu form={form} />
            <ThongTinChung form={form} />
          </Tabs.Panel>

          <Tabs.Panel value="thongtinbenhnhan">
            <ThongTinBenhNhan form={form} />
          </Tabs.Panel>

          <Tabs.Panel value="thongtinchuyenvien">
            <ThongTinChuyenVien form={form} />
          </Tabs.Panel>
        </Tabs>
        <Group>
          <Grid
            className="absolute bottom-0 w-full bg-gray-100"
            fz={"sm"}
            m={0}
          >
            <Grid.Col span={12}>
              <Grid>
                <Grid.Col span={3} m={0} pr={1}>
                  <Button
                    w={"100%"}
                    className="bg-gray-300 text-black"
                    size="xs"
                  >
                    Xóa thông tin nhập
                  </Button>
                </Grid.Col>
                <Grid.Col span={3} m={0}>
                  <Button
                    w={"100%"}
                    className="bg-gray-300 text-black"
                    size="xs"
                  >
                    Kiểm tra lịch sử nhập KCB
                  </Button>
                </Grid.Col>
                <Grid.Col span={6}>
                  <Grid>
                    <Grid.Col span={2}></Grid.Col>
                    <Grid.Col span={3} m={0} pr={1}>
                      <Button
                        type="submit"
                        p={0}
                        size="xs"
                        w={"100%"}
                        value={"black"}
                        className="bg-green-300 text-black"
                      >
                        Tiếp nhận
                      </Button>
                    </Grid.Col>
                    <Grid.Col span={2} m={0} pr={1}>
                      <Button
                        p={0}
                        size="xs"
                        w={"100%"}
                        value={"black"}
                        className="bg-green-300 text-black"
                      >
                        Sửa
                      </Button>
                    </Grid.Col>
                    <Grid.Col span={2} pr={1}>
                      <Button
                        p={0}
                        size="xs"
                        w={"100%"}
                        value={"black"}
                        className="bg-green-300 text-black"
                      >
                        Xóa
                      </Button>
                    </Grid.Col>
                    <Grid.Col span={3} pr={1}>
                      <Button
                        p={0}
                        size="xs"
                        w={"100%"}
                        value={"black"}
                        className="bg-red-300 text-black"
                      >
                        Thoát
                      </Button>
                    </Grid.Col>
                  </Grid>
                </Grid.Col>
              </Grid>
            </Grid.Col>
          </Grid>
        </Group>
      </form>
    </>
  );
};

export default MainContent;
