import React from "react";
import PropTypes from "prop-types";

class CreateTask extends React.Component {
  state = { value: "" };

  onChange = (event) => {
    this.setState({ value: event.target.value });
  };

  onClick = () => {
    this.props.onCreateTask(this.state.value);
    this.setState({ value: "" });
  };
  render() {
    return (
      <div className="create-task">
        <input
          className="create-task__input"
          type="text"
          value={this.state.value}
          onChange={this.onChange}
        />
        <button className="btn create-task__btn" onClick={this.onClick}>
          Create
        </button>
      </div>
    );
  }
}
export default CreateTask;

CreateTask.propTypes = {
  onCreateTask: PropTypes.func.isRequired,
};
