import React from "react";

export default class ErrorExamplesChild extends React.Component {

  componentWillUnmount() {
    throw new Error("You've caught an error");
  }

  render() {
    return (
      <h3>
        Error Examples Child
      </h3>
    )
  }
}
