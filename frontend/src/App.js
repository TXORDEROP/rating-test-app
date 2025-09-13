import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import StoreList from "./pages/StoreList";
import RateStore from "./pages/RateStore";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">Rating Show App</h1>
          <div className="space-x-4">
            <Link to="/" className="text-gray-700 hover:text-blue-500">
              Stores
            </Link>
            <Link to="/rate" className="text-gray-700 hover:text-blue-500">
              Rate
            </Link>
            <Link to="/signup" className="text-gray-700 hover:text-blue-500">
              Sign Up
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-blue-500">
              Log In
            </Link>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<StoreList />} />
          <Route path="/rate" element={<RateStore />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
