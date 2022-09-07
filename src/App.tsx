import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import { MainPage } from "./MainPage/components/MainPage";
import { Login } from "./Olx/Login/Components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
