import "./App.css";
import React, { useState, useEffect } from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import AddTodo from "./component/AddTodo";
import EditTodo from "./component/EditTodo";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [id, setId] = useState("");
  const [editTask, setEditTask] = useState(null);
  const [todoList, setTodoList] = useState([]);

  //Get data from addTask modal
  const getData = (list) => {
    setShowModal(true);
    if (list) {
      setTodoList([...todoList, list]);
    }
  };

  //Delete a task from the list
  const removeTask = (name) => {
    setTodoList(todoList.filter((todo) => todo.task !== name));
  };

  //Edit a task, parameters (todo selected, todo's id selected, list of todo)
  const editList = (element, id, list) => {
    setEditModal(!editModal);
    setEditTask(element);
    setId(id);
    //map through array and if the todo's id === todo's id selected, then set the new value
    if (list) {
      setTodoList(
        todoList.map((todo, i) => {
          return id === i ? list : todo;
        })
      );
    }
  };

  const handleClickCheckbox = (element) => {
    setTodoList(
      todoList.map((todo) =>
        todo.task === element ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <div className="App">
      <h1 className="header">TODO LIST</h1>
      <div className="appButton">
        <button onClick={() => getData()}>Add task</button>
      </div>
      <div className="appContainer">
        {todoList
          ? todoList.map((element, key) => {
              return (
                <div className="appTask" key={key}>
                  <input
                    type="checkbox"
                    checked={element.checked}
                    onChange={() => handleClickCheckbox(element.task)}
                  />
                  <div className="taskName">
                    <span>{element.task}</span>
                    <span>{moment(element.date).format("DD/MM/YYYY")}</span>
                  </div>
                  <div
                    className="taskStatus"
                    style={
                      element.checked === true
                        ? { backgroundColor: "#01DF74", color: "white" }
                        : { backgroundColor: "#FFD580", color: "white" }
                    }
                  >
                    {element.checked === true ? "Finished" : element.status}
                  </div>
                  <div>
                    <button
                      className="iconButton"
                      onClick={() => editList(element, key)}
                    >
                      <FontAwesomeIcon icon={faPen} />
                    </button>
                  </div>

                  <button
                    className="iconButton"
                    onClick={() => removeTask(element.task)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              );
            })
          : null}
      </div>
      {showModal ? (
        <AddTodo
          hideModal={() => setShowModal(false)}
          handleClickParent={getData}
        />
      ) : null}
      {editModal ? (
        <EditTodo
          infosTask={editTask}
          editModal={() => setEditModal(!editModal)}
          id={id}
          handleClickParent={editList}
        />
      ) : null}
    </div>
  );
}

export default App;
