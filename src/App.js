import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/user" element={<Navbar />} />
          <Route exact path="/admin" element={<Navbar />} />
          <Route path="/" element={<Navigate to="/user" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
