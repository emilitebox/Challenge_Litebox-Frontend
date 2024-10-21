import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/authenticated/home";

const UserStack = () => (
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/" element={<Navigate to="/home" />} />
    <Route path="*" element={<>notfound</>} />
  </Routes>
);

export default UserStack;
