import React, { useState } from "react";
import "./App.css";
import Popup from "./popup";

function App() {
  const [popupVisible, setPopupVisible] = useState(false);

  const openPopup = () => {
    setPopupVisible(true);
  };

  return (
    <div className="App">
      <button className="Welcome" onClick={openPopup}>Welcome</button>
      {popupVisible && <Popup />}
    </div>
  );
}

export default App;
