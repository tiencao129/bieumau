import BarCard from "../cards/BarCard";
import LineCard from "../cards/LineCard";
import PieCard from "../cards/PieCard";

const Sidebar = (props) => {
  const list = [
    { name: "Line", id: 1 },
    { name: "Bar", id: 2 },
    { name: "Pie", id: 3 },
  ];
  return (
    <div
      className="bg-gray-100 rounded-lg"
      style={{
        width: 250,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <br></br>
      <h3 style={{ color: "black" }}>Widgets</h3>
      {list.map((ele, index) => {
        if (ele.name === "Line") {
          return <LineCard key={index} name={ele.name} _id={ele.id}></LineCard>;
        }
        if (ele.name === "Bar") {
          return <BarCard key={index} name={ele.name} _id={ele.id}></BarCard>;
        }
        if (ele.name === "Pie") {
          return <PieCard key={index} name={ele.name} _id={ele.id}></PieCard>;
        }
      })}
    </div>
  );
};
export default Sidebar;
