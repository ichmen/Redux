import React from 'react';
import { connect } from 'react-redux';
import { isFetchingSelector, userDataSelector } from './usersSelectors';

function UserInfo({ isFetching, userData }) {
  if (isFetching) {
    return <span className="spinner"></span>;
  }
  if (!userData) {
    return null;
  }

  return (
    <div className="user">
      <img alt="User Avatar" src={userData.avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{userData.name}</span>
        <span className="user__location">{userData.location}</span>
      </div>
    </div>
  );
}

const mapState = store => {
  return {
    isFetching: isFetchingSelector(store),
    userData: userDataSelector(store),
  };
};

export default connect(mapState)(UserInfo);
