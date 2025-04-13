import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
  FaHome, FaMoneyCheckAlt, FaUserCircle, FaSignInAlt, FaCalendarAlt,
  FaUserPlus, FaInfoCircle, FaBalanceScale, FaUsers, FaChevronDown, FaBars, FaTimes
} from "react-icons/fa";
import toast from "react-hot-toast";


function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navigate = useNavigate();

  const adminToken = localStorage.getItem("adminToken");

  // Function to close mobile menu on selection
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Function to close dropdown on selection
  const handleDropdownLinkClick = () => {
    setIsDropdownOpen(false);
  };

  // Close dropdown if user clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const logOutHandle = (e) => {
    localStorage.removeItem("adminToken");
    toast.success("logged out !!");
    navigate("/");
    return;
  }

  return (
    <nav className="bg-gradient-to-r from-yellow-400 via-green-700 to-blue-900 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <div className="w-10 md:w-12 lg:w-14 h-10 md:h-12 lg:h-14 rounded-full shadow-lg overflow-hidden bg-white flex items-center justify-center">
            <img
              src="log.png"
              alt="Logo"
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-wide drop-shadow-lg">
          LSES 
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-white flex items-center space-x-2 hover:text-pink-300 transition">
            <FaHome /> <span>Home</span>
          </Link>
          <Link to="/plans" className="text-white flex items-center space-x-2 hover:text-pink-300 transition">
            <FaMoneyCheckAlt /> <span>Plans</span>
          </Link>
          <Link to="/events" className="text-white flex items-center space-x-2 hover:text-pink-300 transition">
            <FaCalendarAlt /> <span>Events</span>
          </Link>
          <div className="relative" ref={dropdownRef}>
            <button
              className="text-white flex items-center space-x-2 hover:text-pink-300 transition"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <FaChevronDown /> <span>Others</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden z-50">
                <Link to="/about" onClick={handleDropdownLinkClick} className="block px-4 py-2 text-gray-800 hover:bg-yellow-300 flex items-center">
                  <FaInfoCircle className="mr-2 text-blue-900" /> About Us
                </Link>
                <Link to="/rules" onClick={handleDropdownLinkClick} className="block px-4 py-2 text-gray-800 hover:bg-yellow-300 flex items-center">
                  <FaBalanceScale className="mr-2 text-green-700" /> Rules & Rights
                </Link>
                <Link to="/departments" onClick={handleDropdownLinkClick} className="block px-4 py-2 text-gray-800 hover:bg-yellow-300 flex items-center">
                  <FaUsers className="mr-2 text-pink-500" /> Dept. Heads
                </Link>
              </div>
            )}
          </div>
          <Link to="/login" className="bg-white text-green-700 hover:bg-green-200 px-4 py-2 rounded-full flex items-center space-x-2 transition">
            <FaSignInAlt /> <span>Login</span>
          </Link>
          <Link to="/Register" className="bg-white text-blue-900 hover:bg-blue-200 px-4 py-2 rounded-full flex items-center space-x-2 transition">
            <FaUserPlus /> <span>Register</span>
          </Link>
          {
              !adminToken && <Link to="/admin-login" className="bg-white text-blue-900 hover:bg-blue-200 px-4 py-2 rounded-full flex items-center space-x-2 transition">
              <FaUserPlus /> <span>Admin Login</span> 
          </Link>
          }
          {
            adminToken && <>
              <button onClick={logOutHandle} className="bg-white text-blue-900 hover:bg-blue-200 px-4 py-2 rounded-full flex items-center space-x-2 transition">
                LogOut
              </button>
            </>
          }
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white text-2xl">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="w-48 md:hidden bg-green-700 p-4 space-y-4 flex flex-col items-start">
          <Link to="/" onClick={closeMobileMenu} className="text-white flex items-center space-x-2 hover:text-yellow-300 transition">
            <FaHome /> <span>Home</span>
          </Link>
          <Link to="/plans" onClick={closeMobileMenu} className="text-white flex items-center space-x-2 hover:text-yellow-300 transition">
            <FaMoneyCheckAlt /> <span>Plans</span>
          </Link>
          <Link to="/events" onClick={closeMobileMenu} className="text-white flex items-center space-x-2 hover:text-yellow-300 transition">
            <FaCalendarAlt /> <span>Events</span>
          </Link>
          <Link to="/about" onClick={closeMobileMenu} className="text-white flex items-center space-x-2 hover:text-yellow-300 transition">
            <FaInfoCircle /> <span>About Us</span>
          </Link>
          <Link to="/rules" onClick={closeMobileMenu} className="text-white flex items-center space-x-2 hover:text-yellow-300 transition">
            <FaBalanceScale /> <span>Rules & Rights</span>
          </Link>
          <Link to="/departments" onClick={closeMobileMenu} className="text-white flex items-center space-x-2 hover:text-yellow-300 transition">
            <FaUsers /> <span>Dept. Heads</span>
          </Link>
          <Link to="/login" onClick={closeMobileMenu} className="bg-white text-green-700 hover:bg-green-200 px-4 py-2 rounded-full flex items-center space-x-2 transition">
            <FaSignInAlt /> <span>Login</span>
          </Link>
          <Link to="/Register" onClick={closeMobileMenu} className="bg-white text-blue-900 hover:bg-blue-200 px-4 py-2 rounded-full flex items-center space-x-2 transition">
            <FaUserPlus /> <span>Register</span>
          </Link>
          {
            !adminToken && <Link to="/admin-login" onClick={closeMobileMenu} className="bg-white text-blue-900 hover:bg-blue-200 px-4 py-2 rounded-full flex items-center space-x-2 transition">
            <FaUserPlus /> <span>AdminLogin</span>
            </Link>
          }
          {
            adminToken && <>
              <button onClick={logOutHandle} className="bg-white text-blue-900 hover:bg-blue-200 px-4 py-2 rounded-full flex items-center space-x-2 transition">
                LogOut
              </button>
            </>
          }
        </div>
      )}
    </nav>
  );
}

export default Navbar;
