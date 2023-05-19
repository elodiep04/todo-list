import React, { useState } from "react";
import "./Todo.css";

function AddTodo({ hideModal, handleClickParent }) {
  const [formTodoList, setFormTodoList] = useState({
    task: "",
    date: "",
    checked: false,
    status: "In progess",
  });

  const onChangeTodoList = (event) => {
    setFormTodoList({
      ...formTodoList,
      [event.target.name]: event.target.value,
    });
  };

  const handleClickModal = () => {
    handleClickParent(formTodoList);
    hideModal();
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <h3 className="modalTitle">Add Todo</h3>
        <div className="todoContainer">
          <label>Todo</label>
          <input
            type="text"
            className="modalInput"
            name="task"
            onChange={(e) => onChangeTodoList(e)}
            value={formTodoList.task}
          />
        </div>
        <div className="todoContainer">
          <label>Deadline</label>
          <input
            type="date"
            name="date"
            className="modalInput"
            onChange={(e) => onChangeTodoList(e)}
            value={formTodoList.date}
          ></input>
        </div>
        <div className="appButton modalButton">
          <button onClick={() => handleClickModal()}>Add todo</button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
