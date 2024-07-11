/* eslint-disable react/prop-types */
import React from "react";

export default function DeleteTask({ handleDelete, id }) {
  const openDelete = (value, auth) => {
    handleDelete(value, id, auth);
  };
  return (
    <div className="add-task-container d-flex flex-column p-5 justify-content-center align-items-center">
      <h1
        style={{ width: "50%", height: "auto", textAlign: "center" }}
        className="mb-5"
      >
        Are you sure you want to delete this task?
      </h1>
      <div
        className="d-flex flex-row justify-content-center align-items-center"
        style={{ width: "100%", height: "auto" }}
      >
        <button
          className="add-button d-flex align-items-center justify-content-center"
          style={{
            width: "90px",
            padding: "0 !important",
          }}
          onClick={() => openDelete(true, true)}
        >
          Delete
        </button>
        <button
          className="add-button d-flex align-items-center justify-content-center ms-5"
          style={{
            width: "90px",
            padding: "0 !important",
            borderStyle: "solid",
            borderWidth: "1px",
            borderColor: "blueviolet",
            backgroundColor: "white",
            color: "blueviolet",
          }}
          onClick={() => openDelete(false, false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
