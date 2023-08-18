import { Grid, SimpleGrid, Select, Input, Button } from "@mantine/core";
import { IconSearch, IconX } from "@tabler/icons-react";

const TimKiem = () => {
  return (
    <>
      <Grid fz="xs" m={0} mt={12} className="border-t border-gray-200">
        <Grid.Col py={6} my={0} bg={"gray.0"} span={12} fw={500}>
          Tìm kiếm
        </Grid.Col>
        <Grid.Col span={12}>
          <Grid>
            <Grid.Col span={3} mt={0}>
              <Grid>
                <Grid.Col fz={"xs"} span={12} p={0} mt={7} fw={500}>
                  Tìm kiếm:
                </Grid.Col>
                <Grid.Col fz={"xs"} span={12} p={0} mt={14} fw={500}>
                  Tìm theo:
                </Grid.Col>
              </Grid>
            </Grid.Col>
            <Grid.Col span={9} mt={3}>
              <Grid ml={5} p={0}>
                <Grid.Col span={12} p={0}>
                  <Input
                    size="xs"
                    mt={1}
                    w={"100%"}
                    placeholder="Tìm kiếm bệnh nhân ..."
                  ></Input>
                </Grid.Col>
                <Grid.Col span={8} p={0} mt={"4px"}>
                  <Select
                    mb={"2px"}
                    mr={"2px"}
                    p={0}
                    size={"xs"}
                    placeholder="Tìm kiếm bệnh nhân"
                    data={[
                      { value: "react", label: "React" },
                      { value: "ng", label: "Angular" },
                      { value: "svelte", label: "Svelte" },
                      { value: "vue", label: "Vue" },
                    ]}
                  />
                </Grid.Col>
                <Grid.Col span={2} px={0} pt={4}>
                  <IconSearch></IconSearch>
                </Grid.Col>
                <Grid.Col span={2} px={0} pt={5}>
                  <IconX></IconX>
                </Grid.Col>
              </Grid>
            </Grid.Col>
          </Grid>
          <Grid.Col
            mt={10}
            p={0}
            span={12}
            mb={"2px"}
            className="border border-cyan-500 rounded-md"
          >
            <Button w={"100%"} size={"xs"} variant={"black"}>
              Tìm kiếm bệnh nhân theo điều kiện
            </Button>
          </Grid.Col>
          <Grid.Col span={12} mb={"2px"}>
            <Grid>
              <Grid.Col
                span={8}
                py={0}
                m={0}
                mb={"2px"}
                className="border border-cyan-500 rounded-l-md"
              >
                <Button w={"100%"} size={"xs"} p={0} variant={"black"}>
                  Xem lịch sử tiếp
                </Button>
              </Grid.Col>
              <Grid.Col
                span={4}
                py={0}
                m={0}
                mb={"2px"}
                className="border border-cyan-500 rounded-r-md"
              >
                <Button w={"100%"} size={"xs"} p={0} variant={"black"}>
                  Barcode
                </Button>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default TimKiem;
