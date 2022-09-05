import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import { Login } from "./Olx/Login/Components/Login";

import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}

export default App;
