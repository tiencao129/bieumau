import {
  Grid,
  Select,
  Input,
  Button,
  Radio,
  SimpleGrid,
  Checkbox,
  Group,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const ThongTinBenhNhan = (props) => {
  return (
    <>
      <Grid fz={"xs"} m={0} className="border-b border-gray-300 pb-7">
        <Grid.Col span={12}>
          <Grid>
            <Grid.Col span={6}>
              <Grid>
                <Grid.Col mt={"2px"} span={3} fw={500}>
                  Họ tên (*)
                </Grid.Col>
                <Grid.Col mt={"2px"} span={9}>
                  <Input
                    {...props.form.getInputProps("hoten")}
                    size="xs"
                    placeholder="Nhập mã bệnh nhân ..."
                  />
                </Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col span={6}>
              <Grid>
                <Grid.Col mt={"2px"} span={4}>
                  <Radio.Group
                    p={0}
                    bg={"gray.0"}
                    py={6}
                    mt={"0px"}
                    {...props.form.getInputProps("gioitinh")}
                  >
                    <Group>
                      <Radio value={"Nữ"} size="xs" label="Nữ" px={0} />
                      <Radio
                        value={"Nam"}
                        size="xs"
                        label="Nam"
                        px={0}
                        pl={5}
                      />
                    </Group>
                  </Radio.Group>
                </Grid.Col>
                <Grid.Col mt={"2px"} span={8}>
                  <Grid bg={"white"} m={0} p={0}>
                    <Grid.Col span={3} p={0} mt={"2px"} fw={500}>
                      Ngày sinh
                    </Grid.Col>
                    <Grid.Col span={9} p={0} mt={0}>
                      <Input
                        {...props.form.getInputProps("ngaysinh")}
                        size="xs"
                        placeholder="Nhập ngày sinh ..."
                      />
                    </Grid.Col>
                  </Grid>
                </Grid.Col>
              </Grid>
            </Grid.Col>

            <Grid.Col span={6} pt={0}>
              <Grid>
                <Grid.Col mt={"2px"} span={3} fw={500}>
                  Quốc tịch (*)
                </Grid.Col>
                <Grid.Col mt={"2px"} span={3}>
                  <Select
                    {...props.form.getInputProps("quoctich")}
                    p={0}
                    size={"xs"}
                    placeholder="Chọn quốc tịch"
                    data={[
                      { value: "react", label: "React" },
                      { value: "ng", label: "Angular" },
                      { value: "svelte", label: "Svelte" },
                      { value: "vue", label: "Vue" },
                    ]}
                  />{" "}
                </Grid.Col>
                <Grid.Col mt={"4px"} span={2} px={0} fw={500}>
                  Dân tộc (*)
                </Grid.Col>
                <Grid.Col mt={"2px"} span={4}>
                  <Select
                    {...props.form.getInputProps("dantoc")}
                    p={0}
                    size={"xs"}
                    placeholder="Chọn dân tộc ..."
                    data={[
                      { value: "react", label: "React" },
                      { value: "ng", label: "Angular" },
                      { value: "svelte", label: "Svelte" },
                      { value: "vue", label: "Vue" },
                    ]}
                  />{" "}
                </Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col span={6} pt={0}>
              <Grid>
                <Grid.Col mt={"4px"} span={4} pr={0} fw={500}>
                  Số nhà/tên đường
                </Grid.Col>
                <Grid.Col mt={"2px"} span={8}>
                  <Input
                    {...props.form.getInputProps("sonha_tenduong")}
                    size="xs"
                    placeholder="Nhập số nhà/tên đườngs ..."
                  />
                </Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col span={6} pt={0}>
              <Grid>
                <Grid.Col mt={"2px"} span={3} fw={500}>
                  Tỉnh, huyện, xã
                </Grid.Col>
                <Grid.Col mt={"2px"} span={9}>
                  <Input
                    {...props.form.getInputProps("tinh_huyen_xa")}
                    size="xs"
                    placeholder="Nhập quốc tịch ..."
                  />
                </Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col span={6} pt={0}>
              <Grid>
                <Grid.Col mt={"8px"} span={6} fw={500}>
                  <Checkbox
                    {...props.form.getInputProps("thanhthi")}
                    label="Là thành thị"
                    fz="xs"
                    value={"thanhthi"}
                  ></Checkbox>
                </Grid.Col>
              </Grid>
            </Grid.Col>
          </Grid>
        </Grid.Col>

        <Grid.Col span={12} m={0} py={0}>
          <Grid>
            <Grid.Col span={6} pb={0}>
              <Grid>
                <Grid.Col mt={"2px"} span={3} fw={500}>
                  Nơi làm việc:
                </Grid.Col>
                <Grid.Col mt={"2px"} span={9}>
                  <Input
                    {...props.form.getInputProps("noilamviec")}
                    size="xs"
                    placeholder="Nhập nơi làm việc ..."
                  />
                </Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col span={6} pb={0} mt={1}>
              <Grid>
                <Grid.Col mt={"4px"} span={3} fw={500} pr={0}>
                  Nghề nghiệp:
                </Grid.Col>
                <Grid.Col mt={"2px"} span={9}>
                  <Input
                    {...props.form.getInputProps("nghenghiep")}
                    size="xs"
                    placeholder="Nhập nghề nghiệp ..."
                  />
                </Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col span={6} pb={0}>
              <Grid>
                <Grid.Col mt={"2px"} span={3} fw={500}>
                  Văn hóa:
                </Grid.Col>
                <Grid.Col mt={"2px"} span={9}>
                  <Select
                    {...props.form.getInputProps("vanhoa")}
                    p={0}
                    size={"xs"}
                    placeholder="Lựa chọn văn hóa ..."
                    data={[
                      { value: "react", label: "React" },
                      { value: "ng", label: "Angular" },
                      { value: "svelte", label: "Svelte" },
                      { value: "vue", label: "Vue" },
                    ]}
                  />
                </Grid.Col>
              </Grid>
            </Grid.Col>

            <Grid.Col span={6} pt={0} mt={8}>
              <Grid>
                <Grid.Col mt={"0px"} span={3} fw={500} pr={0}>
                  Họ tên người thân:
                </Grid.Col>
                <Grid.Col mt={"2px"} span={9}>
                  <Input
                    {...props.form.getInputProps("hotennguoithan")}
                    size="xs"
                    placeholder="Nhập họ tên người thân ..."
                  />
                </Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col span={6} pt={0}>
              <Grid>
                <Grid.Col mt={"2px"} span={3} fw={500}>
                  Quan hệ:
                </Grid.Col>
                <Grid.Col mt={"2px"} span={9}>
                  <Select
                    {...props.form.getInputProps("quanhenguoithan")}
                    p={0}
                    size={"xs"}
                    placeholder="Chọn quan hệ ..."
                    data={[
                      { value: "react", label: "React" },
                      { value: "ng", label: "Angular" },
                      { value: "svelte", label: "Svelte" },
                      { value: "vue", label: "Vue" },
                    ]}
                  />
                </Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col span={6} pt={0}>
              <Grid>
                <Grid.Col mt={"5px"} span={3} pr={0} fw={500}>
                  Sđt người thân:
                </Grid.Col>
                <Grid.Col mt={"2px"} span={9}>
                  <Input
                    {...props.form.getInputProps("sdtnguoithan")}
                    size="xs"
                    placeholder="Nhập sdt ..."
                  />
                </Grid.Col>
              </Grid>
            </Grid.Col>
          </Grid>
        </Grid.Col>

        <Grid.Col span={12} m={0} py={0}>
          <Grid mt={3}>
            <Grid.Col span={6} pb={0}>
              <Grid>
                <Grid.Col mt={"2px"} span={3} fw={500}>
                  Địa chỉ người thân:
                </Grid.Col>
                <Grid.Col mt={"2px"} span={9}>
                  <Input
                    {...props.form.getInputProps("diachinguoithan")}
                    size="xs"
                    placeholder="Nhập địa chỉ người thân ..."
                  />
                </Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col span={6} pb={0}>
              <Grid>
                <Grid.Col mt={"5px"} span={6} fw={500}>
                  Số CMND/căn cước người thân:
                </Grid.Col>
                <Grid.Col mt={"2px"} span={6}>
                  <Input
                    {...props.form.getInputProps("CMND_CCCD_nguoithan")}
                    size="xs"
                    placeholder="Nhập CMND/căn cước người thân ..."
                  />
                </Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col span={6} pb={0}>
              <Grid>
                <Grid.Col mt={"5px"} span={3} fw={500}>
                  Ghi chú:
                </Grid.Col>
                <Grid.Col mt={"2px"} span={9}>
                  <Input
                    {...props.form.getInputProps("ghichu")}
                    size="xs"
                    placeholder="Nhập ghi chú ..."
                  />
                </Grid.Col>
              </Grid>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </>
  );
};
export default ThongTinBenhNhan;
