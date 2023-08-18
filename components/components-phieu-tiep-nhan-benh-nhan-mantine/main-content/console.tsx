import { Button, Grid } from "@mantine/core";

const ConsoleMain = (props) => {
  console.log("Check props", props.form);
  return (
    <>
      <Grid fz={"sm"} p={4}>
        <Grid.Col span={12}>
          <Grid>
            <Grid.Col span={3} m={0} pr={1}>
              <Button w={"100%"} className="bg-gray-300 text-black" size="xs">
                Xóa thông tin nhập
              </Button>
            </Grid.Col>
            <Grid.Col span={3} m={0}>
              <Button w={"100%"} className="bg-gray-300 text-black" size="xs">
                Kiểm tra lịch sử nhập KCB
              </Button>
            </Grid.Col>
            <Grid.Col span={6}>
              <Grid>
                <Grid.Col span={2}></Grid.Col>
                <Grid.Col span={3} m={0} pr={1}>
                  <Button
                    {...props.form}
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
    </>
  );
};

export default ConsoleMain;
