import React from "react";
import Header from "./Header";
import { user } from "./user";
import { UserContext } from "./user";

export default class App extends React.Component {
  state = { userData: user };

  render() {
    console.log(this.state);
    return (
      <div className="page">
        <UserContext.Provider value={this.state.userData}>
          <Header />
        </UserContext.Provider>
      </div>
    );
  }
}
