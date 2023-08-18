import { useState } from "react";
import { NavbarPage } from "@/components/navbar/navbar";
import HeaderPage from "@/components/header/header";
import NavFooter from "@/components/navbar/footer";
import {
  AppShell,
  Header,
  Text,
  MediaQuery,
  useMantineTheme,
  createStyles,
  Footer,
  Group,
  SimpleGrid,
  Avatar,
  Center,
  Paper,
  List,
} from "@mantine/core";
import ChucNang from "@/components/chucnang/chucnang";

const useStyles = createStyles((theme) => ({
  infoPerson: {
    width: "100%",
    height: "300px",
    borderRadius: theme.radius.md,
    display: "block",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "10px",
  },
  paper: {
    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },
}));

const ThongTinChucNang = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();

  return (
    <>
      <AppShell
        navbarOffsetBreakpoint="sm"
        navbar={
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <NavbarPage />
          </MediaQuery>
        }
        footer={
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <Footer height={{ base: 50, md: 60 }} p="md">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <NavFooter />
              </div>
            </Footer>
          </MediaQuery>
        }
        header={
          <Header height={{ base: 50, md: 60 }} p="md">
            <div
              style={{ display: "flex", alignItems: "center", height: "100%" }}
            >
              <HeaderPage />
            </div>
          </Header>
        }
      >
        <Group className={classes.infoPerson}>
          <Center>
            <Avatar
              src={null}
              size={200}
              radius={100}
              alt="no image here"
              color="indigo"
            />
          </Center>
          <Text pt="lg">
            Xin chào{" "}
            <Text display={"inline"} fw={700}>
              Dương Nguyễn Phú Cường
            </Text>
          </Text>
          <Text>
            Vai trò:{" "}
            <Text display={"inline"} fw={700}>
              Trưởng nhóm G2B
            </Text>
          </Text>
        </Group>
        <MediaQuery smallerThan="sm" styles={{ display: "block" }}>
          <SimpleGrid cols={3}>
            <Paper
              className={classes.paper}
              shadow="sm"
              radius="md"
              p="md"
              mb="xs"
            >
              <Text tt={"uppercase"} ta={"center"} fw={700}>
                Danh sách chức năng trong ngày
              </Text>
              <ul>
                <li>AA Clone or download repository from GitHub</li>
                <li>Install dependencies with yarn</li>
                <li>To start development server run npm start command</li>
                <li>
                  Run tests to make sure your changes do not break the build
                </li>
                <li>Submit a pull request once you are done</li>
              </ul>
            </Paper>
            <Paper
              shadow="sm"
              radius="md"
              p="md"
              mb="xs"
              className={classes.paper}
            >
              <Text tt={"uppercase"} ta={"center"} fw={700}>
                Danh sách chức năng cuối tháng
              </Text>

              <ul>
                <li>AA Clone or download repository from GitHub</li>
                <li>Install dependencies with yarn</li>
                <li>To start development server run npm start command</li>
                <li>
                  Run tests to make sure your changes do not break the build
                </li>
                <li>Submit a pull request once you are done</li>
              </ul>
            </Paper>
            <Paper
              shadow="sm"
              radius="md"
              p="md"
              mb="xs"
              className={classes.paper}
            >
              <Text tt={"uppercase"} ta={"center"} fw={700}>
                Danh sách chức năng trong năm
              </Text>

              <ul>
                <li>AA Clone or download repository from GitHub</li>
                <li>Install dependencies with yarn</li>
                <li>To start development server run npm start command</li>
                <li>
                  Run tests to make sure your changes do not break the build
                </li>
                <li>Submit a pull request once you are done</li>
              </ul>
            </Paper>
          </SimpleGrid>
        </MediaQuery>
      </AppShell>
    </>
  );
};

export default ThongTinChucNang;
