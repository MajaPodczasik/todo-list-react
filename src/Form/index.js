import React from "react";
import "./style.css";

const Form = (props) => (
  <form className="form">
    <input
      className="form__input"
      placeholder="New task"
    />
    <button className="addTask">
      Add task
    </button>
  </form>
);

export default Form;