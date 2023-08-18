import LeftSidebarContent from "@/components/components-phieu-tiep-nhan-benh-nhan-mantine/left-sidebar/left-sidebar-content";
import MainContent from "@/components/components-phieu-tiep-nhan-benh-nhan-mantine/main-content/main-content";
import RightSidebarContent from "@/components/components-phieu-tiep-nhan-benh-nhan-mantine/right-sidebar/right-sidebar-content";
import StatusBar from "@/components/components-phieu-tiep-nhan-benh-nhan-mantine/status-bar";
import Split from "react-split";

const home = () => {
  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <Split className="split p-0 m-0">
        <div className="py-0 my-0" style={{ minWidth: 250 }}>
          <LeftSidebarContent />
        </div>
        <div
          className=" py-0 my-0 relative maincontent"
          style={{ minWidth: 750 }}
        >
          <MainContent />
        </div>
        <div className=" py-0 my-0" style={{ minWidth: 200 }}>
          <RightSidebarContent />
        </div>
      </Split>
      <div className="border border-gray-400 absolute bottom-0 w-full">
        <StatusBar />
      </div>
    </div>
  );
};

export default home;
