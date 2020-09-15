import React from "react";
import "./App.css";
import Mainpage from "./Components/Mainpage/Mainpage";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <React.Fragment>
      <Mainpage />
      <Sidebar />
    </React.Fragment>
  );
}

export default App;
