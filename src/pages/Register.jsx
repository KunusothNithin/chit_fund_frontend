import { useState } from "react";
import { Link } from "react-router-dom";
import { USER_REGISTER } from "../axios/api";
import axios from "axios";
import toast from "react-hot-toast";
import { User, Phone, Lock, Eye, EyeOff } from "lucide-react";

function Register() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (!/^[A-Za-z\s]+$/.test(form.name.trim())) {
      newErrors.name = "Name must contain only letters and spaces.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
      newErrors.phone = "Invalid phone number. Must be 10 digits starting with 6-9.";
    }

    if (!form.password) {
      newErrors.password = "Password is required.";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        form.password
      )
    ) {
      newErrors.password =
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character.";
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
      const response = await axios.post(USER_REGISTER, {
        name: form.name,
        phone: form.phone,
        password: form.password,
      });

      if (response.status === 201) {
        toast.success("Request sent to Admin, waiting for approval");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-br from-green-100 via-blue-100 to-yellow-100">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md sm:max-w-lg transition-all duration-300">
        <h1 className="text-3xl font-extrabold text-center text-green-700 mb-2">
          Register LSES Account
        </h1>
        <p className="text-center text-blue-600 text-sm mb-6">
          Join the community and start your chit fund journey!
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Field */}
          <div>
            <label className="relative block">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <User size={20} />
              </span>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                className="w-full text-gray-600 py-3 pl-10 pr-4 border border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-150"
              />
            </label>
            <div className="min-h-[1.25rem] mt-1">
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
          </div>

          {/* Phone Field */}
          <div>
            <label className="relative block">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Phone size={20} />
              </span>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="w-full text-gray-600 py-3 pl-10 pr-4 border border-green-300 rounded-xl focus:ring-2 focus:ring-green-400 focus:outline-none transition-all duration-150"
              />
            </label>
            <div className="min-h-[1.25rem] mt-1">
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
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
                placeholder="Password"
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
            Register
          </button>

          {/* Login Link */}
          <p className="text-center text-gray-600 text-sm mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline font-medium">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
