import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AddingOffer } from "./AddingOfferPage/AddingOffer";

import "./App.css";
import { Navbar } from "./MainPage/components/NavBar/components/Navbar";
import { MainPage } from "./MainPage/MainPage";
import { Login } from "./Olx/Login/Components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <MainPage />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/new-offer" element={<AddingOffer />} />
      </Routes>
    </Router>
  );
}

export default App;
