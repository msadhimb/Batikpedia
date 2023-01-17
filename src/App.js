import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar/Navbar";
import {
  BrowserRouter,
  Navigate,
  redirect,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Navbar />} />
          <Route path="/user" element={<Navbar />} />
          <Route path="*" element={<Navigate to="/user" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
