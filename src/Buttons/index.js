import React from "react";
import { Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone}) => (
  <div className="buttons">
    {tasks.length > 0 && (
      <React.Fragment>
        <Button onClick={toggleHideDone} className="buttons__button">
          {hideDone ? "Show" : "Hide"} done
        </Button>
        <Button
          onClick={setAllDone}
          className="buttons__button"
          disabled={tasks.every(({ done }) => done)}
        >
          Mark All Done
        </Button>
      </React.Fragment>
    )}
  </div>
);

export default Buttons;
