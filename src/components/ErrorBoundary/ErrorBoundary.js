import React from "react";

export default class ErrorBoundary extends React.Component {

  state = {
    hasError: false,
  }

  static getDerivedStateFromError(error) {
    console.log(error.message);
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-page">
          <h3>Something went wrong</h3>
        </div>);
    }
    return this.props.children;
  }
}
