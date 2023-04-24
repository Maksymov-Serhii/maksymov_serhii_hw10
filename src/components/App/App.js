import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import ErrorExamples from '../ErrorExamples/ErrorExamples';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Error App</h2>
      <ErrorBoundary>
        <ErrorExamples />
      </ErrorBoundary>
    </div>
  );
}

export default App;
