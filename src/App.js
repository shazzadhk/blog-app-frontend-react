import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
<<<<<<< HEAD
import Contact from "./pages/Contact";
=======
import UserDashboard from "./pages/UserDashboard";
import PrivateRoute from "./components/PrivateRoute";
>>>>>>> ad64f3264137a47ebe81d1d1ba0c1f1c2494f203

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Registration />} />
<<<<<<< HEAD
        <Route path="/contact_us" element={<Contact />} />
=======
        <Route path="/user" element={<PrivateRoute />}>
            <Route path="dashboard" element={<UserDashboard />} />
        </Route>
        
>>>>>>> ad64f3264137a47ebe81d1d1ba0c1f1c2494f203
      </Routes>
    </BrowserRouter>
  );
}

export default App;
