import React from "react";
import UserMenu from "./UserMenu";
import { UserContext } from "./user";

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <UserMenu />
      </header>
    );
  }
}
