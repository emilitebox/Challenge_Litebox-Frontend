import { Routes, Route } from "react-router-dom";
import TestUnauth from "../pages/unauthenticated/TestUnauth";
import TestUnauth2 from "../pages/unauthenticated/TestUnauth2";

const PublicStack = () => (
  <Routes>
    <Route path="/" element={<TestUnauth />} />
    <Route path="/testunauth2" element={<TestUnauth2 />} />
    <Route path="*" element={<>notfound</>} />
  </Routes>
);

export default PublicStack;
