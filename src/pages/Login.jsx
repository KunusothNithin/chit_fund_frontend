import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";

function Login() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const errs = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;

    if (!form.username || !usernameRegex.test(form.username)) {
      errs.username = "Enter a valid username (min 3 characters, letters/numbers only).";
    }

    if (!form.email || !emailRegex.test(form.email)) {
      errs.email = "Enter a valid email address.";
    }

    if (!form.password || form.password.length < 8) {
      errs.password = "Password must be at least 8 characters.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("Login data submitted:", form);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-br from-green-100 via-blue-100 to-yellow-100">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md sm:max-w-lg transition-all duration-300">
        <h1 className="text-3xl font-extrabold text-center text-green-700 mb-2">
          Welcome Back
        </h1>
        <p className="text-center text-blue-600 text-sm mb-6">
          Login to continue
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username Field */}
          <div>
            <label className="relative block">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <User size={20} />
              </span>
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                value={form.username}
                onChange={handleChange}
                className="w-full text-gray-600 py-3 pl-10 pr-4 border border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-150"
              />
            </label>
            <div className="min-h-[1.25rem] mt-1">
              {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="relative block">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Mail size={20} />
              </span>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                className="w-full text-gray-600 py-3 pl-10 pr-4 border border-green-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:outline-none transition-all duration-150"
              />
            </label>
            <div className="min-h-[1.25rem] mt-1">
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="relative block">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Lock size={20} />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleChange}
                className="w-full text-gray-600 py-3 pl-10 pr-10 border border-yellow-300 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:outline-none transition-all duration-150"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </label>
            <div className="min-h-[1.25rem] mt-1">
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-green-500 to-lime-500 text-white font-semibold hover:opacity-90 transition-all duration-300"
          >
            Log in
          </button>

          {/* Links */}
          <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
            <a href="#" className="hover:underline hover:text-gray-800">
              Forgot password?
            </a>
            <Link to="/Register" className="hover:underline hover:text-gray-800">
              Register here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
