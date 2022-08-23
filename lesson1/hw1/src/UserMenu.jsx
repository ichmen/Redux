import React from "react";
import { UserContext } from "./user";

export default class UserMenu extends React.Component {
  render() {
    console.log(this);
    return (
      <div className="menu">
        <UserContext.Consumer>
          {({ name, avatar_url }) => (
            <>
              <span className="menu__greeting">{`Hello, ${name}`}</span>
              <img
                alt="User Avatar"
                src={avatar_url}
                className="menu__avatar"
              />
            </>
          )}
        </UserContext.Consumer>
      </div>
    );
  }
}
UserMenu.ContextType = UserContext;
