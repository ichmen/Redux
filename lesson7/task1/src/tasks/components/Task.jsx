import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

function Task({ text, done, id, onCheckBoxChange, onDelete }) {
  Task.propTypes = {
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    onCheckBoxChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
  };
  return (
    <li
      className={classNames("list-item", {
        "list-item_done": done,
      })}
    >
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
        onChange={() => onCheckBoxChange(id)}
      />
      <span className="list-item__text">{text}</span>
      <button
        className="list-item__delete-btn"
        onClick={() => onDelete(id)}
      ></button>
    </li>
  );
}
export default Task;
