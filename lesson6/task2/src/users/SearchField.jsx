import React from 'react';
import { connect } from 'react-redux';
import * as usersActions from './usersActions';

class SearchField extends React.Component {
  state = {
    userName: '',
  };

  clickHandler = () => {
    this.props.fetchUserData(this.state.userName);
  };

  changeHandler = event => {
    this.setState({ userName: event.target.value });
  };

  render() {
    return (
      <div className="name-form">
        <input type="text" className="name-form__input" onChange={this.changeHandler} />
        <button className="name-form__btn btn" onClick={this.clickHandler}>
          Show
        </button>
      </div>
    );
  }
}

const mapDispatch = {
  fetchUserData: usersActions.fetchUserData,
};

export default connect(null, mapDispatch)(SearchField);
