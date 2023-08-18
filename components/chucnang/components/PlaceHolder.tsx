import React from "react";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";

const PlaceHolder = (props) => {
  const [rowCount, setRowCount] = useState(1);
  const [userData, setUserData] = useState({});

  const changeHandler = (index, data) => {
    setUserData({ ...userData, [index]: [...data] });
  };

  const save = () => {
    console.log(userData);
    alert("Find the JSON for the current dashboard design in the console log.");
  };

  return (
    <div style={{ height: "100%" }}>
      <div style={{ display: "flex", flexDirection: "row", minHeight: "95%" }}>
        <Sidebar></Sidebar>
        <div
          style={{ flex: 1, marginLeft: 20 }}
          className="border p-1 rounded-lg"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3>Chức năng được chọn</h3>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                width: 200,
              }}
            >
              <button
                className="rounded-l-lg"
                onClick={save}
                style={{
                  padding: 10,
                  backgroundColor: "black",
                  color: "white",
                  outline: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                SAVE
              </button>
              <button
                className="rounded-r-lg"
                style={{
                  padding: 10,
                  backgroundColor: "#84DD63",
                  outline: "none",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setRowCount(rowCount + 1);
                }}
              >
                ADD ROW
              </button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "10px",
            }}
          >
            {[...Array(rowCount)].map((_, index) => {
              return (
                <div key={index}>
                  <Content
                    change={(data) => {
                      changeHandler(index, data);
                    }}
                  ></Content>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceHolder;
