import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Policy from "./pages/Policy.js";
import Register from "./pages/Auth/Register.js";
import Login from "./pages/Auth/Login.js";
import Pagenotfound from "./pages/PageNotFound";
import Dashboard from "./pages/user/Dashboard.js";
import PrivateRoute from "./components/Routes/PrivateRoute.js";
import ForgotPassword from "./pages/Auth/ForgotPassword.js";
import AdminRoute from "./components/Routes/AdminRoute.js";
import AdminDashboard from "./pages/Admin/AdminDashboard.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Nested Route  */}
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
