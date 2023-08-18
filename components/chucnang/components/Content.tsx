import React from "react";
import { useState } from "react";
import { ItemTypes } from "./ItemTypes";
import { useDrop } from "react-dnd";
import RGL, { WidthProvider } from "react-grid-layout";

import LineChart from "../charts/LineChart";
import BarChart from "../charts/BarChart";
import PieChart from "../charts/PieChart";

const ReactGridLayout = WidthProvider(RGL);

const Content = (props) => {
  const [row, setRow] = useState([]);
  const [layout, setLayout] = useState([
    { i: 1, x: 0, y: 0, w: 1, h: 1, minH: 1, maxH: 1 }, // *** -- minH & maxH doesnt effect the grid items
    { i: 2, x: 2, y: 0, w: 1, h: 1, minH: 1, maxH: 1 },
    // {i: '3', x: 0, y: 0, w: 1, h: 1, minH: 1, maxH: 1},
    // {i: '4', x: 0, y: 0, w: 1, h: 1, minH: 1, maxH: 1}
  ]);
  const [resizeplotly, setResizePlotly] = useState(false);
  const onLayoutChange = (layout) => {
    setLayout(layout);
  };

  const onResize = (layouts) => {
    console.log(layouts);
    setLayout(layouts);
  };

  const handleDelete = (key) => {
    const tempArray = row.slice();
    const index = tempArray.indexOf(tempArray.find((data) => data.id === key));
    tempArray.splice(index, 1);
    setRow(tempArray);
  };

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: (item, monitor) => {
      if (row.length < 4) {
        setRow((old) => {
          props.change([...old, { name: item.name, id: item.id }]);
          return [...old, { name: item.name, id: item.id }];
        });
      } else {
        alert("Maximum 4 items allowed on a row");
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  return (
    <div>
      <div
        ref={drop}
        style={{ maxWidth: "100%", height: "auto", position: "relative" }}
      >
        <ReactGridLayout
          compactType={"horizontal"}
          rowHeight={200}
          cols={4}
          onResize={onResize}
          width={100}
          layout={layout}
          onLayoutChange={onLayoutChange}
          // draggableHandle=".MyDragHandleClassName"
          draggableCancel=".MyDragCancel"
          isBounded={true}
        >
          {row.length !== 0 ? (
            row.map((ele, index) => {
              console.log(index);
              return (
                <div key={index + 1} style={{ position: "absolute" }}>
                  <button
                    style={{ position: "absolute", padding: "5px" }}
                    className="deleteButton"
                    onClick={() => handleDelete(ele.id)}
                  >
                    x
                  </button>
                  {ele.name === "Line" ? (
                    <LineChart factor={index + 1}></LineChart>
                  ) : ele.name === "Bar" ? (
                    <BarChart></BarChart>
                  ) : (
                    <PieChart></PieChart>
                  )}
                </div>
              );
            })
          ) : (
            <div style={{ height: 200 }}></div>
          )}
        </ReactGridLayout>
      </div>
    </div>
  );
};

export default Content;
