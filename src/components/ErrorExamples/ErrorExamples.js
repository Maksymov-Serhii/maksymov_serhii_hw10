import React, { useState } from "react";
import ErrorExamplesChild from "../ErrorExamplesChild/ErrorExamplesChild";

const ErrorExamples = () => {
  const [error, setError] = useState(false);
  const [showErrorExamplesChild, setShowErrorExamplesChild] = useState(true);

  if (error) {
    return {};
  }

  const handleError = () => {
    setError(true);
  }

  const handleHideErrorExamplesChild = () => {
    setShowErrorExamplesChild(false);
  }

  return (
    <div className="error-page">
      <h3>Error Examples</h3>
      <p>
        <button onClick={handleError} className="button">Create error in parent component</button>
      </p>

      <div className="child-block">
        {showErrorExamplesChild && <ErrorExamplesChild />}
        <p>
          <button onClick={handleHideErrorExamplesChild} className="button">Hide Error Examples Child</button>
        </p>
      </div>
    </div>
  )
}

export default ErrorExamples;
