import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone}) => (
  <div className="buttons">
    {tasks.length > 0 && (
      <React.Fragment>
        <button onClick={toggleHideDone} className="buttons__button">
          {hideDone ? "Show" : "Hide"} done
        </button>
        <button
          className="buttons__button"
          disabled={tasks.every(({ done }) => done)}
        >
          Mark All Done
        </button>
      </React.Fragment>
    )}
  </div>
);

export default Buttons;
