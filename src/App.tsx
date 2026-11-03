import { useState } from "react";
import Clock from "./Clock";
import "./App.scss";

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <div id="app">
      <label>
        <input type="checkbox"
          onChange={e=> setVisible(e.target.checked)} checked={visible} />
        visible
      </label>
      {visible && <Clock />}
    </div>
  );
}

export default App;