import { Children, useState } from "react";
import { NavbarPage } from "@/components/navbar/navbar";
import HeaderPage from "@/components/header/header";
import NavFooter from "@/components/navbar/footer";
import React from "react";
import LeftSidebar from "@/components/components-phieu-tiep-nhan-benh-nhan/left-sidebar/left-sidebar";
import MainContent from "@/components/components-phieu-tiep-nhan-benh-nhan/main/main";
import RightSidebar from "@/components/components-phieu-tiep-nhan-benh-nhan/right-sidebar/right-sidebar";
import Split from "react-split";

import {
  AppShell,
  Header,
  MediaQuery,
  useMantineTheme,
  createStyles,
  Footer,
  Grid,
} from "@mantine/core";
import { Main } from "next/document";

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
            <Footer height={{ base: 50, sm: 0 }} p="md">
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
        <Split className="split" minSize={50}>
          <div className="w-1/6">
            <LeftSidebar />
          </div>
          <div className="w-4/6">
            <MainContent />
          </div>
          <div className="w-1/6">
            <RightSidebar />
          </div>
        </Split>
      </AppShell>
    </>
  );
};

export default ThaoTacChucNang;
