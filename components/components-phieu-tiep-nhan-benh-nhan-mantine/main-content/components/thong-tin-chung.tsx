import {
  Grid,
  Select,
  Input,
  Button,
  Radio,
  SimpleGrid,
  Accordion,
  Checkbox,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const ThongTinChung = (props) => {
  return (
    <>
      <Accordion defaultValue="customization" radius={"lg"} fz={"xs"}>
        <Accordion.Item value="customization" m={0}>
          <Accordion.Control className="bg-gray-50 h-10 text-sm">
            Thông tin chung
          </Accordion.Control>
          <Accordion.Panel>
            <Grid>
              <Grid.Col span={12}>
                <Grid>
                  <Grid.Col span={6} pb={0}>
                    <Grid>
                      <Grid.Col mt={"2px"} span={3} fw={500}>
                        Mã bệnh nhân
                      </Grid.Col>
                      <Grid.Col mt={"2px"} span={9}>
                        <Input
                          {...props.form.getInputProps("mabenhnhan")}
                          size="xs"
                          placeholder="Nhập mã bệnh nhân ..."
                        />
                      </Grid.Col>
                    </Grid>
                  </Grid.Col>
                  <Grid.Col span={6} pb={0}>
                    <Grid>
                      <Grid.Col mt={"2px"} span={4} fw={500}>
                        Số thứ tự thăm
                      </Grid.Col>
                      <Grid.Col mt={"2px"} span={8}>
                        <Input
                          {...props.form.getInputProps("stttham")}
                          size="xs"
                          placeholder="Nhập số thứ tự thăm ..."
                        />
                      </Grid.Col>
                    </Grid>
                  </Grid.Col>

                  <Grid.Col span={6} pt={0} mb={10}>
                    <Grid>
                      <Grid.Col mt={"2px"} span={3} fw={500}>
                        Phòng khám
                      </Grid.Col>
                      <Grid.Col mt={"2px"} span={6}>
                        <Input
                          {...props.form.getInputProps("phongkham")}
                          size="xs"
                          placeholder="Nhập số phòng khám ..."
                        />
                      </Grid.Col>
                      <Grid.Col span={3} mt={"8px"}>
                        <Checkbox size={"xs"} label="Ưu tiên" />
                      </Grid.Col>
                    </Grid>
                  </Grid.Col>
                  <Grid.Col span={6} pt={0} mb={10}>
                    <Grid>
                      <Grid.Col mt={"2px"} span={4} fw={500}>
                        Cán bộ tiếp nhận
                      </Grid.Col>
                      <Grid.Col mt={"2px"} span={8}>
                        <Input
                          {...props.form.getInputProps("canbotiepnhan")}
                          size="xs"
                          placeholder="Nhập cán bộ tiếp nhận ..."
                        />
                      </Grid.Col>
                    </Grid>
                  </Grid.Col>
                </Grid>
              </Grid.Col>
            </Grid>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </>
  );
};
export default ThongTinChung;
