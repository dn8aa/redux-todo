import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import UseRef from "./pages/UseRef";
import Parent from "./pages/Parent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/edituser/:id" element={<EditUser />} />
        <Route path="/useref" element={<UseRef />} />
        <Route path="/parent" element={<Parent />} />
      </Routes>
    </div>
  );
}

export default App;
