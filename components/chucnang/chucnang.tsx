import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import PlaceHolder from "./components/PlaceHolder";

const ChucNang = () => {
  return (
    <div className="h-max">
      <DndProvider backend={HTML5Backend}>
        <PlaceHolder></PlaceHolder>
      </DndProvider>
    </div>
  );
};

export default ChucNang;
