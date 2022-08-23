import React from "react";
import { ThemeContext } from "./themes";

export default class ThemedButton extends React.Component {
  render() {
    // console.log(this);
    return (
      <button
        className="btn"
        {...this.props}
        style={{
          color: this.context.fontColor,
          backgroundColor: this.context.background,
        }}
      />
    );
  }
}
ThemedButton.contextType = ThemeContext;
