import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/AdminDashboard";
import Plans from "./pages/Plans";
import Login from "./pages/Login";
import AdminLogin from "./pages/AdminLogin";
import Register from "./pages/Register";
import Events from "./pages/Events";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import AdminProtectedRoute from "./components/AdminProtectedRoute";
import PendingUsers from "./pages/PendingUsers";
import RegisteredUsers from "./pages/RegesteredUsers";
import AdminLayout from "./pages/AdminLayout";

function App() {
  return (
    <Router>
      <div className="min-h-screen from-sky-400 to-purple-600 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/events" element={<Events />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin-login" element={<AdminLogin />} />

          {/* ✅ Nested admin routes with layout */}
          <Route
            path="/admin-dashboard"
            element={
              <AdminProtectedRoute>
                <AdminLayout />
              </AdminProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="pending-users" element={<PendingUsers />} />
            <Route path="registered-users" element={<RegisteredUsers />} />
          </Route>
        </Routes>
        <Footer />
      </div>
      <Toaster />
    </Router>
  );
}

export default App;
