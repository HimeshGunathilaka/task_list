/* eslint-disable react/prop-types */
import React from "react";
import { PencilSquare, Trash } from "react-bootstrap-icons";

export default function Task({ props, handleDelete, handleEditTask }) {
  const done = {
    borderLeftColor: "blueviolet",
    borderTopColor: "blueviolet",
    borderRightColor: "blueviolet",
    borderBottomColor: "blueviolet",
  };
  const toDo = {
    borderLeftColor: "#E7F0DC",
    borderTopColor: "#E7F0DC",
    borderRightColor: "#E7F0DC",
    borderBottomColor: "#E7F0DC",
  };
  const inProgress = {
    borderLeftColor: "blueviolet",
    borderTopColor: "blueviolet",
    borderRightColor: "#E7F0DC",
    borderBottomColor: "#E7F0DC",
  };
  const deleteTask = (value, id) => {
    handleDelete(true, id);
  };

  const editTask = (value, id) => {
    handleEditTask(true, id);
  };
  return (
    <>
      <div className="task d-flex bg-white flex-row p-3 mb-3">
        <div className="d-flex table flex-row m-0 p-0 align-items-center">
          <div className="td d-flex flex-column">
            <p className="th">Task</p>
            <p>{props.name}</p>
          </div>
          <div className="td d-flex flex-column">
            <p className="th">Priority</p>
            <p
              style={{
                paddingLeft: "10px",
                color:
                  props.priority == "High"
                    ? "red"
                    : props.priority == "Medium"
                    ? "orange"
                    : "green",
              }}
            >
              {props.priority}
            </p>
          </div>
          <div className="td d-flex flex-column">
            <p></p>
            <span
              className="p-2"
              style={{
                display: "block",
                width: "auto",
                height: "auto",
                fontSize: "10px",
                backgroundColor: "#E7F0DC",
                borderRadius: "5px",
                color: "#758694",
                fontWeight: "bold",
              }}
            >
              {props.status}
            </span>
          </div>
          <div className="td d-flex flex-column">
            <p></p>
            <div
              className="progess-bar"
              style={
                props.progress == 2
                  ? done
                  : props.progress == 0
                  ? toDo
                  : inProgress
              }
            ></div>
          </div>
          <div className="td d-flex flex-column">
            <p></p>
            <div
              className="d-flex flex-row justify-content-end"
              style={{ width: "100%", height: "100%" }}
            >
              <PencilSquare
                width={35}
                height={35}
                color="black"
                style={{ cursor: "pointer" }}
                onClick={() => editTask(true, props.id)}
              />
              <Trash
                width={35}
                height={35}
                color="red"
                className="ms-4"
                style={{ cursor: "pointer" }}
                onClick={() => deleteTask(true, props.id)}
              />
            </div>
          </div>
        </div>
        {/* <table className="p-3">
          <th>Task</th>
          <th style={{ paddingLeft: "10px" }}>Priority</th>
          <th></th>
          <th></th>
          <th></th>
          <tbody>
            <tr>
              <td>{props.name}</td>
              <td
                style={{
                  paddingLeft: "10px",
                  color:
                    props.priority == "High"
                      ? "red"
                      : props.priority == "Medium"
                      ? "orange"
                      : "green",
                }}
              >
                {props.priority}
              </td>
              <td>
                <span
                  className="p-2"
                  style={{
                    width: "auto",
                    height: "auto",
                    fontSize: "10px",
                    backgroundColor: "#E7F0DC",
                    borderRadius: "5px",
                    color: "#758694",
                    fontWeight: "bold",
                  }}
                >
                  {props.status}
                </span>
              </td>
              <td>
                <div
                  className="progess-bar"
                  style={
                    props.progress == 2
                      ? done
                      : props.progress == 0
                      ? toDo
                      : inProgress
                  }
                ></div>
              </td>
              <td>
                <div
                  className="d-flex flex-row justify-content-end"
                  style={{ width: "100%", height: "100%" }}
                >
                  <PencilSquare
                    width={20}
                    height={20}
                    color="black"
                    style={{ cursor: "pointer" }}
                    onClick={() => editTask(true, props.id)}
                  />
                  <Trash
                    width={20}
                    height={20}
                    color="red"
                    className="ms-4"
                    style={{ cursor: "pointer" }}
                    onClick={() => deleteTask(true, props.id)}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table> */}
      </div>
    </>
  );
}
