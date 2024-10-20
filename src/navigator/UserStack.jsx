import { Routes, Route, Navigate } from "react-router-dom";
import TestAuth from "../pages/authenticated/TestAuth";
import TestAuth2 from "../pages/authenticated/TestAuth2";

const UserStack = () => (
  <Routes>
    <Route path="/testauth" element={<TestAuth />} />
    <Route path="/testauth2" element={<TestAuth2 />} />
    <Route path="/" element={<Navigate to="/testauth" />} />
    <Route path="*" element={<>notfound</>} />
  </Routes>
);

export default UserStack;
