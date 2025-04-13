import axios from "axios";
import { useState } from "react";
import { ADMIN_LOGIN } from "../axios/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaEnvelope, FaLock } from "react-icons/fa";

function AdminLogin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); // 🔑 for toggling visibility

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(form.email.trim())
    ) {
      newErrors.email = "Invalid email address.";
    }

    if (!form.password) {
      newErrors.password = "Password is required.";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        form.password
      )
    ) {
      newErrors.password =
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post(ADMIN_LOGIN, {
        email: form.email, 
        password: form.password,
      });

      if (response.status === 200) {
        toast.success("Admin logged in successfully");
        console.log(response.data);
        // store token, navigate, etc.
        const data = response.data;

        localStorage.setItem("adminToken" , data.token);

        navigate("/admin-dashboard");
      }
    } catch (error) {
      console.log("Error while logging in admin:", error);
      toast.error(
        error?.response?.data?.message || "Something went wrong"
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-100 via-blue-100 to-yellow-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 md:p-10 w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center text-green-700">Admin Login</h1>
        <p className="text-center text-blue-600 mt-2 mb-6">Secure access for administrators only</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full text-black p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 pl-10"
              required
            />
            <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-600" />
            {errors.email && (
              <p className="text-red-500  text-xs mt-2 absolute left-0 w-full">{errors.email}</p>
            )}
          </div>

          {/* Password with Eye Toggle */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full text-black p-3 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 pr-12 pl-10"
              required
            />
            <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2  text-gray-600" />
            <div
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-2 absolute left-0 w-full">{errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-green-500 text-white mt-8 px-6 py-1 rounded-lg hover:bg-green-600 transition duration-300 w-full sm:w-auto"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
