import { useState } from "react";
import { NavbarPage } from "@/components/navbar/navbar";
import HeaderPage from "@/components/header/header";
import NavFooter from "@/components/navbar/footer";
import NhomChucNang from "@/components/nhom-chuc-nang/lua-chon-nhom-chuc-nang";

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
  Grid,
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

const ThaoTacChucNang = () => {
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
        {/* <h1 className="text-center pb-4 font-medium">Chức năng</h1> */}
        <Grid>
          <Grid.Col span={12}>
            <div className="relative border-sky-500">
              <div className="absolute h-full w-full">
                <NhomChucNang />
              </div>
            </div>
          </Grid.Col>
        </Grid>
      </AppShell>
    </>
  );
};

export default ThaoTacChucNang;
