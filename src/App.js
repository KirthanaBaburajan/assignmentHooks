import "./App.css";
import Articles from "./components/Articles/Articles";
import React, { useState } from "react";
import countContext from "./context/countContext";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header" onClick={() => setCount(count + 1)}>
        Articles
      </header>
      <countContext.Provider value={count}>
        <Articles />
      </countContext.Provider>
    </div>
  );
}

export default App;
