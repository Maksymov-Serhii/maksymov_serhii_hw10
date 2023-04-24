import React from "react";

export default class ErrorExamplesChild extends React.Component {

  state = {
    isError: false,
  }

  componentWillUnmount() {
    throw new Error("You've caught an error");
  }
  
  handleMethodError() {
    try {
      throw new Error("You've caught an error in child component's method");
    } catch (error) {
      console.log(error);
      this.setState({ isError: true })
    }
  }

  render() {
    return (
      <div>
        <button className="button" onClick={this.handleMethodError.bind(this)}>Create method error in child component</button>

        {this.state.isError && <p>Something went wrong</p>}

        <h3>
          Error Examples Child
        </h3>
      </div>
    )
  }
}
