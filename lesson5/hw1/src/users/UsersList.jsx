import React from 'react';
import User from './User';
import Filter from '../Filter';
import { connect } from 'react-redux';
import { filteredListSelector, filterTextSelector } from './users.selector';
import { inputChange } from '../App';

function UsersList({ users, onChange, filtertext }) {
  return (
    <div>
      <Filter onChange={onChange} count={users.length} filtertext={filtertext} />
      <ul className="users">
        {users.map(user => {
          return <User key={user.id} name={user.name} age={user.age} />;
        })}
      </ul>
    </div>
  );
}

const mapState = state => {
  return {
    users: filteredListSelector(state),
    filterText: filterTextSelector(state),
  };
};

const mapProps = {
  onChange: inputChange,
};

export default connect(mapState, mapProps)(UsersList);
