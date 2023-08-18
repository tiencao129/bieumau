import {
  Grid,
  Select,
  Input,
  Button,
  Radio,
  SimpleGrid,
  Checkbox,
  Group,
  NumberInput,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { DateInput } from "@mantine/dates";
import { useState } from "react";

const DoiTuongBenhNhan = (props) => {
  const [value, setValue] = useState<Date | null>(null);

  return (
    <Grid fz={"xs"} className="border-b m-0 pb-2">
      <Grid.Col span={12}>
        <Grid>
          <Grid.Col span={12}>
            <Grid>
              <Grid.Col span={2} pt={13} fw={500}>
                Đối tượng:
              </Grid.Col>
              <Grid.Col span={3} pt={13}>
                <Radio.Group {...props.form.getInputProps("dienchiphi")}>
                  <Group>
                    <Radio size="xs" value={"Thu phí"} label="Thu phí" />
                    <Radio size="xs" value={"BHYT"} label="BHYT" />
                  </Group>
                </Radio.Group>
              </Grid.Col>
              <Grid.Col span={1} pt={13} fw={500} px={0}>
                Đối tượng:
              </Grid.Col>
              <Grid.Col span={4} pt={13}>
                <Radio.Group {...props.form.getInputProps("tuyenkham")}>
                  <Group>
                    <Radio value={"Đúng tuyến"} size="xs" label="Đúng tuyến" />
                    <Radio value={"Trái tuyến"} size="xs" label="Trái tuyến" />
                  </Group>
                </Radio.Group>
              </Grid.Col>
              <Grid.Col span={1} pt={13} fw={500}>
                Số thuế:
              </Grid.Col>
              <Grid.Col span={1}>
                <Input
                  size="xs"
                  placeholder="%"
                  {...props.form.getInputProps("sothue")}
                />
              </Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col span={12} m={0} py={1}>
            <Grid>
              <Grid.Col span={2} pt={13} fw={500}>
                Số thẻ BHYT:
              </Grid.Col>

              <Grid.Col span={8}>
                <Grid>
                  <Grid.Col span={6}>
                    <Grid>
                      <Grid.Col span={3} pr={0}>
                        <Input
                          onKeyPress={(event) => {
                            if (!/^[A-Za-z]+$/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}
                          maxLength={2}
                          onPaste={(e) => e.preventDefault()}
                          size="xs"
                          {...props.form.getInputProps("sotheBHYT1")}
                        />
                      </Grid.Col>
                      <Grid.Col span={2} px={1}>
                        <Input
                          onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}
                          maxLength={1}
                          onPaste={(e) => e.preventDefault()}
                          px={0}
                          size="xs"
                          {...props.form.getInputProps("sotheBHYT2")}
                        />
                      </Grid.Col>
                      <Grid.Col span={2} px={1}>
                        <Input
                          onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}
                          maxLength={2}
                          onPaste={(e) => e.preventDefault()}
                          size="xs"
                          {...props.form.getInputProps("sotheBHYT3")}
                        />
                      </Grid.Col>
                      <Grid.Col span={5} pl={0}>
                        <Input
                          onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}
                          maxLength={10}
                          onPaste={(e) => e.preventDefault()}
                          size="xs"
                          {...props.form.getInputProps("sotheBHYT4")}
                        />
                      </Grid.Col>
                    </Grid>
                  </Grid.Col>
                  <Grid.Col span={1}>
                    <IconSearch></IconSearch>
                  </Grid.Col>
                  <Grid.Col span={5}></Grid.Col>
                </Grid>
              </Grid.Col>

              <Grid.Col span={2}>
                <Button
                  size="xs"
                  variant="outline"
                  w={"100%"}
                  loaderPosition="right"
                >
                  Cập nhật thông tin
                </Button>
              </Grid.Col>
            </Grid>
          </Grid.Col>

          <Grid.Col span={12} m={0} py={1}>
            <Grid>
              <Grid.Col span={2} pt={13} fw={500}>
                Ngày hiệu lực:
              </Grid.Col>
              <Grid.Col span={4}>
                <DateInput
                  w={"100%"}
                  size={"xs"}
                  value={value}
                  onChange={setValue}
                  placeholder="Date input"
                  maw={400}
                />
              </Grid.Col>
              <Grid.Col span={2} pt={13} fw={500}>
                Ngày hết hạn:
              </Grid.Col>
              <Grid.Col span={4}>
                <DateInput
                  w={"100%"}
                  size={"xs"}
                  value={value}
                  onChange={setValue}
                  placeholder="Date input"
                  maw={400}
                />
              </Grid.Col>
            </Grid>
          </Grid.Col>
          <Grid.Col span={12} m={0} py={1}>
            <Grid>
              <Grid.Col span={2} pt={13} fw={500}>
                Nơi cấp:
              </Grid.Col>
              <Grid.Col span={2} pr={0.5}>
                <Select
                  {...props.form.getInputProps("noicap1")}
                  p={0}
                  size={"xs"}
                  placeholder="Pick one"
                  data={[
                    { value: "react", label: "React" },
                    { value: "ng", label: "Angular" },
                    { value: "svelte", label: "Svelte" },
                    { value: "vue", label: "Vue" },
                  ]}
                />
              </Grid.Col>
              <Grid.Col span={2} pl={0.5}>
                <Select
                  {...props.form.getInputProps("noicap2")}
                  p={0}
                  size={"xs"}
                  placeholder="Pick one"
                  data={[
                    { value: "react", label: "React" },
                    { value: "ng", label: "Angular" },
                    { value: "svelte", label: "Svelte" },
                    { value: "vue", label: "Vue" },
                  ]}
                />
              </Grid.Col>
              <Grid.Col span={2} pt={13} fw={500}>
                Nơi đăng ký:
              </Grid.Col>
              <Grid.Col span={2} pr={0.5}>
                <Select
                  {...props.form.getInputProps("noidangky1")}
                  p={0}
                  size={"xs"}
                  placeholder="Pick one"
                  data={[
                    { value: "react", label: "React" },
                    { value: "ng", label: "Angular" },
                    { value: "svelte", label: "Svelte" },
                    { value: "vue", label: "Vue" },
                  ]}
                />
              </Grid.Col>
              <Grid.Col span={2} pl={0.5}>
                <Select
                  {...props.form.getInputProps("noidangky2")}
                  p={0}
                  size={"xs"}
                  placeholder="Pick one"
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
          <Grid.Col span={12} m={0} py={1}>
            <Grid>
              <Grid.Col span={2} pt={13} fw={500}>
                Mã khu vực:
              </Grid.Col>
              <Grid.Col span={4}>
                <Select
                  {...props.form.getInputProps("makhuvuc")}
                  p={0}
                  size={"xs"}
                  placeholder="Pick one"
                  data={[
                    { value: "react", label: "React" },
                    { value: "ng", label: "Angular" },
                    { value: "svelte", label: "Svelte" },
                    { value: "vue", label: "Vue" },
                  ]}
                />
              </Grid.Col>
              <Grid.Col span={2} pt={13} fw={500}>
                Ngày đủ 5 năm:
              </Grid.Col>
              <Grid.Col span={4}>
                <Select
                  {...props.form.getInputProps("ngaydu5nam")}
                  p={0}
                  size={"xs"}
                  placeholder="Pick one"
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
          <Grid.Col span={12} m={0} mt={10} py={1}>
            <Checkbox.Group {...props.form.getInputProps("phichitra")}>
              <Group>
                <Checkbox
                  size={"xs"}
                  label="Miễn % chi trả"
                  value={"Miễn % chi trả"}
                />
                <Checkbox size={"xs"} label="Cấp cứu" value={"Cấp cứu"} />
                <Checkbox size={"xs"} label="Tai nạn" value={"Tai nạn"} />
              </Group>
            </Checkbox.Group>
          </Grid.Col>
        </Grid>
      </Grid.Col>
    </Grid>
  );
};
export default DoiTuongBenhNhan;
