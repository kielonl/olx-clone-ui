import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import { Navbar } from "./MainPage/NavBar/components/Navbar";
import { Login } from "./Olx/Login/Components/Login";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
