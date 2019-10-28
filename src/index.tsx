import React from "react";
import ReactDOM from "react-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
