import React, { useState } from "react";
import "./Todo.css";

function EditTodo({ editModal, infosTask, id, handleClickParent }) {
  const [formTodoList, setFormTodoList] = useState({
    task: infosTask.task,
    date: infosTask.date,
    checked: infosTask.checked,
    status: infosTask.status,
  });

  //Change form infos
  const onChangeTodoList = (event) => {
    setFormTodoList({
      ...formTodoList,
      [event.target.name]: event.target.value,
    });
  };

  const handleClickModal = () => {
    handleClickParent(infosTask, id, formTodoList);
    editModal();
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <h3 className="modalTitle">Edit Todo</h3>
        <div className="todoContainer">
          <label>Task</label>
          <input
            type="text"
            className="modalInput"
            name="task"
            onChange={(e) => onChangeTodoList(e)}
            value={formTodoList.task}
          ></input>
        </div>
        <div className="todoContainer">
          <label>Deadline</label>
          <input
            type="date"
            name="date"
            placeholder={infosTask.date}
            className="modalInput"
            onChange={(e) => onChangeTodoList(e)}
            value={formTodoList.date}
          ></input>
        </div>
        <div className="appButton modalButton">
          <button onClick={() => handleClickModal(id)}>Edit todo</button>
        </div>
      </div>
    </div>
  );
}

export default EditTodo;
