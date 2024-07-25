import React, { useEffect, useState } from "react";
import "./App.css";
import { Plus } from "react-bootstrap-icons";
import Task from "./components/task";
import AddTask from "./components/addTask";
import EditTask from "./components/editTask";
import DeleteTask from "./components/deleteTask";
import { db } from "./services/firebaseConfig.js";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

function App() {
  const [addtask, setAddTask] = useState(false);
  const [edittask, setEditTask] = useState(false);
  const [deleteTask, setDeleteTask] = useState(false);
  const [deleteTaskId, setDeleteTaskId] = useState("");
  const [editTaskId, setEditTaskId] = useState("");
  const [data, setData] = useState([]);
  const [confirmed, setConfirmed] = useState(false);
  const [selectedTask, setSelectedTask] = useState({
    name: "",
    priority: "",
    status: "",
    progress: "",
    id: "",
  });
  const [task, setTask] = useState({
    name: "",
    priority: "",
    status: "",
    progress: "",
    id: "",
  });

  useEffect(() => {
    console.log(selectedTask);
  }, [selectedTask]);

  useEffect(() => {
    // setSelectedTask(data.filter((item) => item.name == editTaskId));
    console.log(editTaskId);
  }, [editTaskId]);
  //fetch data
  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "task_list"));
    const dataList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setData(dataList);
  };
  useEffect(() => {
    fetchData();
  }, []);

  //add data
  const addTasks = async (newTask) => {
    try {
      const docRef = await addDoc(collection(db, "task_list"), newTask);
      fetchData();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  //delete data
  const deleteTaskByName = async (id) => {
    const q = query(collection(db, "task_list"), where("name", "==", id));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (document) => {
      await deleteDoc(doc(db, "task_list", document.id));
    });
    fetchData();
  };

  //update data
  const updateTask = async (task) => {
    const q = query(
      collection(db, "task_list"),
      where("name", "==", task.name)
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach(async (document) => {
      const docRef = doc(db, "task_list", document.id);
      await updateDoc(docRef, task);
    });
  };

  useEffect(() => {}, [deleteTaskId]);
  const handleAddTask = (value, newTask) => {
    setAddTask(value);
    console.log(newTask);
    if (!newTask.name == "") {
      addTasks(newTask);
    }
  };

  // const handleEditTask = (value, newTask, auth) => {
  //   console.log(newTask.name);
  //   setEditTask(value);
  //   setEditTaskId(newTask.name);
  //   if (auth == true) {
  //     updateTask(newTask);
  //     setEditTask(false);
  //   }
  // };

  const handleEditTask = (value, newTask = {}, auth = false) => {
    setEditTask(value);
    if (value === true) {
      setTask(newTask);
      setEditTaskId(newTask.id);
    }
    if (auth) {
      updateTask(newTask);
      setEditTask(false);
    }
  };
  const handleDelete = (value, id, auth) => {
    setDeleteTask(value);
    setDeleteTaskId(id);
    if (auth == true) {
      deleteTaskByName(id);
      setDeleteTask(false);
    }
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
            <EditTask
              handleEditTask={handleEditTask}
              name={data.filter((item) => item.name == editTaskId).name}
              status={data.filter((item) => item.name == editTaskId).status}
              progress={data.filter((item) => item.name == editTaskId).progress}
              id={data.filter((item) => item.name == editTaskId).id}
              priority={data.filter((item) => item.name == editTaskId).priority}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default App;
