import "./App.css";
import Fifthcom from "./Pages/Fifthcom";
import FirstCom from "./Pages/FirstCom";
import Fourthcom from "./Pages/Fourthcom";
import Header from "./Pages/Header";
import Secondcom from "./Pages/Secondcom";
import Sixthcom from "./Pages/Sixthcom";
import Thirdcom from "./Pages/Thirdcom";
import Topnavbar from "./Pages/Topnavbar";
import Seventh from "./Pages/Seventh";
import { Route, Router, Routes } from "react-router-dom";
import Youth from "./Pages/Youth";

function App() {
  return (
    <div className="App">
      <Topnavbar />
      <Header />
      <FirstCom />
      <Secondcom />
      <Thirdcom />
      <br></br>
      <Fourthcom />
      <br></br>
      <Fifthcom />
      <br></br>
      <Sixthcom />
      <br></br>
      <Seventh />
      <Youth/>
    </div>
  );
}

export default App;
