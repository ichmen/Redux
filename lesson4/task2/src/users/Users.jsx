import React from "react";
import { connect } from "react-redux";
import * as UserActions from "./users.actions";

class Users extends React.Component {
  newUser = () => {
    const id = Math.round(Math.random() * 1000000);
    const newUser = {
      id,
      name: `User # ${id}`,
    };
    this.props.addUser(newUser);
  };

  render() {
    const { deleteUser, users } = this.props;
    return (
      <div className="users">
        <button className="users__create-btn" onClick={this.newUser}>
          Create user
        </button>
        <ul className="users__list">
          {users.usersList.map((user) => {
            return (
              <li key={user.id} className="users__list-item">
                <span>{`User # ${user.id}`}</span>
                <button
                  className="users__delete-btn"
                  onClick={() => deleteUser(user.id)}
                >
                  +
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapState = (state) => {
  return { users: state.users };
};

const mapProps = {
  addUser: UserActions.addUser,
  deleteUser: UserActions.deleteUser,
};

const connector = connect(mapState, mapProps);
export default connector(Users);
