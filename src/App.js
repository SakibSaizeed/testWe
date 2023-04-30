import logo from "./logo.svg";
import "./App.css";
import Home from "./Home/Home";
import Login from "./Login/Login";
import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
