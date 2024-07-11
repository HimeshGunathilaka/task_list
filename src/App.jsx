import React, { useEffect, useState } from "react";
import "./App.css";
import { Plus } from "react-bootstrap-icons";
import Task from "./components/task";
import AddTask from "./components/addTask";
import EditTask from "./components/editTask";
import DeleteTask from "./components/deleteTask";
import { db } from "./services/firebaseConfig.js";
import { addDoc, collection, getDocs } from "firebase/firestore";

const tasks = [
  {
    name: "Go to gym",
    priority: "High",
    status: "To Do",
    progress: "0",
    id: "0",
  },
  {
    name: "Read a book",
    priority: "Low",
    status: "Done",
    progress: "2",
    id: "1",
  },
  {
    name: "Go to market",
    priority: "Medium",
    status: "In Progress",
    progress: "1",
    id: "2",
  },
  {
    name: "Restart learning solidworks",
    priority: "High",
    status: "Done",
    progress: "2",
    id: "3",
  },
  {
    name: "Change slider to scroll",
    priority: "High",
    status: "Done",
    progress: "2",
    id: "4",
  },
];
function App() {
  const [addtask, setAddTask] = useState(false);
  const [edittask, setEditTask] = useState(false);
  const [deleteTask, setDeleteTask] = useState(false);
  const [deleteTaskId, setDeleteTaskId] = useState(0);
  const [editTaskId, setEditTaskId] = useState(0);
  const [data, setData] = useState([]);
  const [task, setTask] = useState({
    name: "",
    priority: "",
    status: "",
    progress: "",
    id: "",
  });

  //fetch data
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "task_list"));
      const dataList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(dataList);
    };

    fetchData();
  }, []);

  //add data
  const addTasks = async (newTask) => {
    try {
      const docRef = await addDoc(collection(db, "task_list"), newTask);
      // setTask({
      //   name: "",
      //   priority: "",
      //   status: "",
      //   progress: "",
      //   id: "",
      // });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {}, [deleteTaskId]);
  const handleAddTask = (value, newTask) => {
    setAddTask(value);
    console.log(newTask);
    if (!newTask.name == "") {
      addTasks(newTask);
    }
  };

  const handleEditTask = (value, id) => {
    setEditTask(value);
    setEditTaskId(id);
  };
  const handleDelete = (value, id) => {
    setDeleteTask(value);
    setDeleteTaskId(id);
  };
  return (
    <>
      <div className="task-container d-flex flex-column p-0 m-0 bg-light">
        <div className="task-header d-flex flex-row px-5 mt-3 justify-content-between align-items-center">
          <h1 className="h1">Task List</h1>
          <button
            className="add-button d-flex flex-row align-items-center"
            style={{ cursor: "pointer !important" }}
            onClick={() => handleAddTask(true)}
          >
            <Plus width={25} height={25} />
            Add Task
          </button>
        </div>
        <div className="task-wrapper d-flex flex-column mt-3 px-4">
          {data.map((task, index) => {
            return (
              <Task
                props={task}
                key={index}
                handleDelete={handleDelete}
                handleEditTask={handleEditTask}
              />
            );
          })}
        </div>
        {addtask ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              width: "100vw",
              height: "100vh",
              position: "absolute",
              top: "0",
              left: "0",
              backgroundColor: "rgba(0,0,0,0.4)",
              backdropFilter: "blur(15px)",
            }}
          >
            <AddTask handleAddTask={handleAddTask} />
          </div>
        ) : (
          <></>
        )}
        {deleteTask ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              width: "100vw",
              height: "100vh",
              position: "absolute",
              top: "0",
              left: "0",
              backgroundColor: "rgba(0,0,0,0.4)",
              backdropFilter: "blur(15px)",
            }}
          >
            <DeleteTask handleDelete={handleDelete} id={deleteTaskId} />
          </div>
        ) : (
          <></>
        )}
        {edittask ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              width: "100vw",
              height: "100vh",
              position: "absolute",
              top: "0",
              left: "0",
              backgroundColor: "rgba(0,0,0,0.4)",
              backdropFilter: "blur(15px)",
            }}
          >
            <EditTask handleEditTask={handleEditTask} id={editTaskId} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default App;
