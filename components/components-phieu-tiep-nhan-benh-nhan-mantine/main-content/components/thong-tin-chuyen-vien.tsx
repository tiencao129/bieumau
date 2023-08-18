import {
  Grid,
  Select,
  Input,
  Button,
  Radio,
  SimpleGrid,
  Checkbox,
  Accordion,
  Group,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const ThongTinChuyenVien = () => {
  return (
    <Grid fz={"xs"} m={0} px={8} className="border-b border-gray-200">
      <Grid.Col span={12} my={"10px"}>
        <Grid>
          <Grid.Col span={2} fw={500} p={0} pt={"10px"}>
            Nơi chuyển tới:
          </Grid.Col>
          <Grid.Col span={2} p={0} mt={"6px"}>
            <Input
              size="xs"
              placeholder="Nhập nơi chuyển tới"
              w={"full"}
              mr={"1px"}
            />
          </Grid.Col>
          <Grid.Col span={4} p={0} mt={"6px"}>
            <Input size="xs" placeholder="Nhập nơi chuyển tới ..." w={"full"} />
          </Grid.Col>
          <Grid.Col span={1} p={0} fw={500} pt={"10px"} pl={"8px"}>
            Số giấy:
          </Grid.Col>
          <Grid.Col span={3} p={0} mt={"6px"}>
            <Input size="xs" placeholder="Nhập số giấy ..." w={"full"} />
          </Grid.Col>

          <Grid.Col span={2} p={0} fw={500} pt={"10px"}>
            Điều trị từ ngày:
          </Grid.Col>
          <Grid.Col span={4} p={0} mt={"2px"}>
            <Input
              size="xs"
              placeholder="Nhập điều trị từ ngày ..."
              w={"full"}
            />
          </Grid.Col>
          <Grid.Col span={2} p={0} fw={500} pt={"10px"} pl={"10px"}>
            Đến ngày:
          </Grid.Col>
          <Grid.Col span={4} p={0} mt={"2px"}>
            <Input size="xs" placeholder="Nhập ngày đến ..." />
          </Grid.Col>

          <Grid.Col span={2} p={0} fw={500} pt={"10px"}>
            Hình thức:
          </Grid.Col>
          <Grid.Col span={4} p={0} mt={"2px"}>
            <Input size="xs" placeholder="Nhập hình thức ..." w={"full"} />
          </Grid.Col>
          <Grid.Col span={2} p={0} fw={500} pt={"10px"} pl={"10px"}>
            Tuyến CMKT:
          </Grid.Col>
          <Grid.Col span={4} p={0} mt={"2px"}>
            <Input size="xs" placeholder="Nhập tuyến CMKT" />
          </Grid.Col>

          <Grid.Col span={3} p={0} fw={500} pt={"10px"}>
            Lí do chuyển tuyến:
          </Grid.Col>
          <Grid.Col span={9} p={2} pl={4} mt={"5px"} bg={"gray.0"}>
            <Radio.Group>
              <Group>
                <Radio
                  p={0}
                  size="xs"
                  label="Đủ điều kiện chuyển tuyến"
                  value={"Đủ điều kiện chuyển tuyến"}
                />
                <Radio
                  size="xs"
                  label="Theo yêu cầu của người bệnh hoặc người đại diện hợp pháp của người bệnh"
                  value={
                    "Theo yêu cầu của người bệnh hoặc người đại diện hợp pháp của người bệnh"
                  }
                />
              </Group>
            </Radio.Group>
          </Grid.Col>
          <Grid.Col span={3} p={0} fw={500} pt={"10px"}>
            Chuẩn đoán nơi chuyển đến:
          </Grid.Col>
          <Grid.Col span={9} p={0} mt={"6px"}>
            <Input size="xs" placeholder="Nhập tuyến CMKT" w={"full"} />
          </Grid.Col>
        </Grid>
      </Grid.Col>
    </Grid>
  );
};
export default ThongTinChuyenVien;
