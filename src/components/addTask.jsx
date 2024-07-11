/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { XLg } from "react-bootstrap-icons";

export default function AddTask({ handleAddTask }) {
  const [selected, setSelected] = useState(0);
  const selected1 = {
    padding: "5px 20px",
    border: "none",
    backgroundColor: "red",
    color: "white",
    borderRadius: "10px",
    cursor: "pointer",
  };
  const not_selected1 = {
    padding: "5px 20px",
    border: "solid 1px red",
    color: "red",
    borderRadius: "10px",
    backgroundColor: "white",
    cursor: "pointer",
  };

  const selected2 = {
    padding: "5px 20px",
    border: "none",
    backgroundColor: "orange",
    color: "white",
    borderRadius: "10px",
    cursor: "pointer",
  };
  const not_selected2 = {
    padding: "5px 20px",
    border: "solid 1px orange",
    color: "orange",
    borderRadius: "10px",
    backgroundColor: "white",
    cursor: "pointer",
  };

  const selected3 = {
    padding: "5px 20px",
    border: "none",
    backgroundColor: "green",
    color: "white",
    borderRadius: "10px",
    cursor: "pointer",
  };
  const not_selected3 = {
    padding: "5px 20px",
    border: "solid 1px green",
    color: "green",
    borderRadius: "10px",
    backgroundColor: "white",
    cursor: "pointer",
  };
  const openTask = (value) => {
    handleAddTask(value);
  };
  return (
    <>
      <div className="add-task-container d-flex flex-column px-5 py-4">
        <div className="task-header d-flex flex-row justify-content-between align-items-center">
          <h1 className="h1">Add Task</h1>
          <XLg
            width={25}
            height={25}
            color="black"
            onClick={() => openTask(false)}
            style={{ cursor: "pointer" }}
          />
        </div>
        <p className="p-0 m-0">Task</p>
        <input
          className="mt-2 mb-4"
          type="text"
          placeholder="send article to edditor"
          style={{
            padding: "0 10px",
            backgroundColor: "#E7F0DC",
            border: "solid 1px #758694",
            height: "40px",
            width: "100%",
            borderRadius: "10px",
          }}
        />
        <p className="p-0 m-0">Priority</p>
        <div className="d-flex flex-row mt-2 ">
          <div
            className="d-flex justify-content-center align-items-center"
            style={selected == 1 ? selected1 : not_selected1}
            onClick={() => setSelected(1)}
          >
            High
          </div>
          <div
            className="d-flex justify-content-center align-items-center ms-3"
            style={selected == 2 ? selected2 : not_selected2}
            onClick={() => setSelected(2)}
          >
            Medium
          </div>
          <div
            className="d-flex justify-content-center align-items-center ms-3"
            style={selected == 3 ? selected3 : not_selected3}
            onClick={() => setSelected(3)}
          >
            Low
          </div>
        </div>
        <div
          className="d-flex flex-row justify-content-end"
          style={{ width: "100%", height: "auto" }}
        >
          <button
            className="add-button d-flex align-items-center justify-content-center"
            style={{
              width: "90px",
              padding: "0 !important",
            }}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}
