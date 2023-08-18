import {
  Grid,
  Select,
  Input,
  Button,
  Radio,
  SimpleGrid,
  Checkbox,
  Accordion,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const ThongTinSinhHieu = () => {
  return (
    <>
      <Accordion defaultValue="customization" radius={"lg"} fz={"xs"}>
        <Accordion.Item value="customization" m={0}>
          <Accordion.Control className="bg-gray-50 h-10 text-sm">
            Thông tin sinh hiệu
          </Accordion.Control>
          <Accordion.Panel>
            <Grid>
              <Grid.Col span={12}>
                <Grid>
                  <Grid.Col span={1} pr={0} fw={500} pt={15}>
                    Mạch:
                  </Grid.Col>
                  <Grid.Col span={3}>
                    <Grid>
                      <Grid.Col span={8} p={0} py={10}>
                        <Input
                          placeholder="Nhập lần/phút ..."
                          size="xs"
                          width={"full"}
                        />
                      </Grid.Col>
                      <Grid.Col span={4} p={0} pt={15} pl={5}>
                        (Lần/phút)
                      </Grid.Col>
                    </Grid>
                  </Grid.Col>
                  <Grid.Col span={1} pr={0} fw={500} pt={15}>
                    Huyết áp:
                  </Grid.Col>
                  <Grid.Col span={3}>
                    <Grid>
                      <Grid.Col span={8} p={0} py={10}>
                        <Input
                          placeholder="Nhập mmHg..."
                          size="xs"
                          width={"full"}
                        />
                      </Grid.Col>
                      <Grid.Col span={4} p={0} pt={15} pl={5}>
                        (mmHg)
                      </Grid.Col>
                    </Grid>
                  </Grid.Col>
                  <Grid.Col span={1} pr={0} fw={500} pt={15}>
                    Nhiệt độ:
                  </Grid.Col>
                  <Grid.Col span={3}>
                    <Grid>
                      <Grid.Col span={8} p={0} py={10}>
                        <Input
                          placeholder="Nhập &#186; C ..."
                          size="xs"
                          width={"full"}
                        />
                      </Grid.Col>
                      <Grid.Col span={4} p={0} pt={15} pl={5}>
                        (&#186; C)
                      </Grid.Col>
                    </Grid>
                  </Grid.Col>

                  <Grid.Col span={1} pr={0} fw={500} pt={10}>
                    Chiều cao:
                  </Grid.Col>
                  <Grid.Col span={3}>
                    <Grid>
                      <Grid.Col span={8} p={0} py={5}>
                        <Input
                          placeholder="Nhập cm ..."
                          size="xs"
                          width={"full"}
                        />
                      </Grid.Col>
                      <Grid.Col span={4} p={0} pt={10} pl={5}>
                        (cm)
                      </Grid.Col>
                    </Grid>
                  </Grid.Col>
                  <Grid.Col span={1} pr={0} fw={500} pt={10}>
                    Cân nặng:
                  </Grid.Col>
                  <Grid.Col span={3}>
                    <Grid>
                      <Grid.Col span={8} p={0} py={5}>
                        <Input
                          placeholder="Nhập kg ..."
                          size="xs"
                          width={"full"}
                        />
                      </Grid.Col>
                      <Grid.Col span={4} p={0} pt={10} pl={5}>
                        (kg)
                      </Grid.Col>
                    </Grid>
                  </Grid.Col>
                  <Grid.Col span={1} pr={0} fw={500} pt={10}>
                    Nhiệp thở
                  </Grid.Col>
                  <Grid.Col span={3}>
                    <Grid>
                      <Grid.Col span={8} p={0} py={5}>
                        <Input
                          placeholder="Nhập lần/phút ..."
                          size="xs"
                          width={"full"}
                        />
                      </Grid.Col>
                      <Grid.Col span={4} p={0} pt={10} pl={5}>
                        (Lần/phút)
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
export default ThongTinSinhHieu;
