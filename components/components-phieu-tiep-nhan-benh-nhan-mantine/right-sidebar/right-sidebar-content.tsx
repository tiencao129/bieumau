import { Button, Grid } from "@mantine/core";
import CongKham from "./components/cong-kham";
import PhongKham from "./components/phong-kham";
import Split from "react-split";

const RightSidebarContent = () => {
  return (
    <>
      <Split className="split-1" direction="vertical">
        <div className="cong-kham">
          <CongKham />
        </div>
        <div className="phong-kham">
          <PhongKham />
        </div>
      </Split>

      <Button
        mx={10}
        size="xs"
        w={"90%"}
        variant="outline"
        className="bg-gray-100 text-black button-right-sidebar"
      >
        Làm mới danh sách phòng khám
      </Button>
    </>
  );
};

export default RightSidebarContent;
