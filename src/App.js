import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register/Register";
import Newpassword from "./Components/Newpassword/Newpassword";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/newpassword" element={<Newpassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
