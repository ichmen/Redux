import React from "react";
import User from "./User";
import Pagination from "./Pagination";
import { connect } from "react-redux";
import { nextPage, previousPage } from "../App";

function UsersList({ users, currentPage, goNext, goPrev }) {
  console.log(users);
  return (
    <div>
      <Pagination
        currentPage={currentPage}
        goNext={goNext}
        goPrev={goPrev}
        totalItems={users.length}
      />
      <ul className="users">
        {users
          .filter(
            (el, index) =>
              index >= currentPage * 3 && index < (currentPage + 1) * 3
          )
          .map((user) => {
            return <User key={user.id} name={user.name} age={user.age} />;
          })}
      </ul>
    </div>
  );
}

const mapState = (state) => {
  return {
    users: state.users.usersList,
    currentPage: state.currentPage,
  };
};

const mapProps = {
  goNext: nextPage,
  goPrev: previousPage,
};

const connector = connect(mapState, mapProps);
export default connector(UsersList);
