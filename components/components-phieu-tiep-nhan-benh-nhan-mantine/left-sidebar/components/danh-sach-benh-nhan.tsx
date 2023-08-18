import { useState } from "react";
import { DateInput } from "@mantine/dates";
import { Grid, Select, Center, Button } from "@mantine/core";
import { IconRefresh } from "@tabler/icons-react";

const DanhSachBenhNhan = () => {
  const [value, setValue] = useState<Date | null>(null);
  const [selectValue, setSelectValue] = useState<string | null>(null);

  const refresh_value = () => {
    setValue(null);
    setSelectValue(null);
  };

  return (
    <>
      <Grid my={0} mx={0}>
        <Grid.Col fz={"sm"} span={12} py={10} bg={"gray.0"} fw={500} mb={8}>
          Danh sách bệnh nhân
        </Grid.Col>
        <Grid.Col fz={"xs"} span={3} py={3} pr={0}>
          <Grid>
            <Grid.Col fw={500} span={12} p={0} pt={9}>
              Khoa Khám:
            </Grid.Col>
            <Grid.Col span={12} p={0} mt={"xs"} fw={500}>
              Ngày khám:
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col fz={"sm"} span={7} p={0}>
          <Grid m={0} ml={5}>
            <Grid.Col p={0} span={12} my={"2px"}>
              <Select
                w={"100%"}
                size={"xs"}
                value={selectValue}
                onChange={setSelectValue}
                placeholder="Pick one"
                data={[
                  { value: "react", label: "React" },
                  { value: "ng", label: "Angular" },
                  { value: "svelte", label: "Svelte" },
                  { value: "vue", label: "Vue" },
                ]}
              />
            </Grid.Col>
            <Grid.Col p={0} span={12} mb="2px">
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
        <Grid.Col span={2} fz={"xs"} p={6} m={"auto"}>
          <Button m={0} p={4} variant="outline" onClick={() => refresh_value()}>
            <IconRefresh
              color="black"
              // viewBox="0 0 24 24"
              // strokeWidth="2"
              // stroke="currentColor"
              // fill="none"
              // strokeLinecap="round"
              // strokeLinejoin="round"
            />
          </Button>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default DanhSachBenhNhan;
