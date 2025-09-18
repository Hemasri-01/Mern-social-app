import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Feed from "./components/Feed";

function App() {
  const token = localStorage.getItem("token");
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feed" element={token ? <Feed /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to={token ? "/feed" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;
