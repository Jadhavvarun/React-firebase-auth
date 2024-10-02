import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import UserComponent from "../components/User";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user" element={<UserComponent />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
