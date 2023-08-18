import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../components/ItemTypes";
const BarCard = (props) => {
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.CARD,
      id: props._id,
      name: props.name,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  return (
    <div style={{ color: "white", margin: 10 }}>
      <img ref={drag} width={230} height={180} src="/Images/bar.jpg"></img>
    </div>
  );
};

export default BarCard;
