import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import { Navbar } from "./MainPage/components/NavBar/components/Navbar";
import { SearchBar } from "./MainPage/components/SearchBar/components/SearchBar";
import { MainPage } from "./MainPage/MainPage";
import { Offers } from "./Offers/components/Offers";
import { Login } from "./Olx/Login/Components/Login";
import { HookTest } from "./test/HookTest";

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
        <Route
          path="/offers/:page"
          element={
            <>
              <Navbar />
              <SearchBar />
              <Offers />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<HookTest />} />
      </Routes>
    </Router>
  );
}

export default App;
