import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import React from "react";
import {
  FaHandshake,
  FaShieldAlt,
  FaLock,
  FaPiggyBank,
  FaUserPlus,
  FaPercentage,
  FaMoneyBillWave,
  FaClock,
  FaUsers,
  FaHeart,
  FaSmile,
  FaHandsHelping,
  FaHome,
  FaGrinStars,
  FaStar,
  FaGift,
  FaLeaf,
  FaSun,
  FaThumbsUp,
  FaRocket,
  FaLightbulb,
  FaBell,
  FaFeatherAlt
} from "react-icons/fa";

// Define the messages with their respective icons and colors
const messages = [
  // English Messages
  {
    text: "Heartfelt Welcome!",
    icon: FaHeart,
    color: "yellow",
  },
  {
    text: "Glad to Have You!",
    icon: FaHandsHelping,
    color: "green",
  },
  {
    text: "You're Home Now!",
    icon: FaHome,
    color: "blue",
  },
  {
    text: "Warmest Greetings!",
    icon: FaSun,
    color: "yellow",
  },
  {
    text: "Shining Bright!",
    icon: FaStar,
    color: "green",
  },

  // Hindi Messages
  {
    text: "आपका स्वागत है!",
    icon: FaSmile,
    color: "blue",
  },
  {
    text: "दिल से स्वागत!",
    icon: FaHeart,
    color: "yellow",
  },
  {
    text: "खुश आमदीद!",
    icon: FaGrinStars,
    color: "green",
  },
  {
    text: "आपका हार्दिक अभिनंदन!",
    icon: FaHandshake,
    color: "blue",
  },
  {
    text: "तहे दिल से स्वागत है!",
    icon: FaGift,
    color: "yellow",
  },

  // Telugu Messages
  {
    text: "సుస్వాగతం!",
    icon: FaSmile,
    color: "green",
  },
  {
    text: "మనఃపూర్వక స్వాగతం!",
    icon: FaHandshake,
    color: "blue",
  },
  {
    text: "మీరు స్వాగతం!",
    icon: FaLeaf,
    color: "yellow",
  },
  {
    text: "హృదయపూర్వక స్వాగతం!",
    icon: FaBell,
    color: "green",
  },
  {
    text: "సంతోషంగా స్వాగతం!",
    icon: FaFeatherAlt,
    color: "blue",
  },
];

// Map color names to Tailwind CSS classes
const colorClasses = {
  yellow: "text-yellow-500",
  green: "text-green-500",
  blue: "text-blue-500",
};

function Home() {
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 3000);

    return () => clearInterval(messageInterval);
  }, []);

  const { text, icon: Icon, color } = messages[currentMessage];
  const textColorClass = colorClasses[color];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-blue-100 text-[#0B3D91] flex flex-col items-center px-4 py-6 font-sans">
      {/* Animated Welcome Message */}
      <motion.div
        key={text}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`text-center text-3xl md:text-5xl font-bold p-4 ${textColorClass} drop-shadow-lg`}
      >
        <p className="flex items-center justify-center">
          <Icon className={`mr-2 p-8${textColorClass}`} size={84} />
          {text}
        </p>
      </motion.div>

      {/* Hero Section */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 py-10 gap-10">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl">
          <div className="text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight flex items-center justify-center lg:justify-start animate-text-color-cycle">
  <FaLock className="mr-3 p-4 animate-text-color-cycle" size={100} />
  Collective Savings Shared Success
</h1>

            <p className="text-base md:text-lg mt-4 text-yellow-800">
              A trusted and efficient way to save, invest, and grow your money within your community.
            </p>
            <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
              <Link
                to="/plans"
                className="flex items-center bg-green-600 hover:bg-green-700 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-xl font-semibold text-base shadow-lg transition-transform transform hover:scale-105"
              >
                <FaPiggyBank className="text-white mr-2" size={20} />
                Explore Plans
              </Link>
              <Link
                to="/Register"
                className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-xl font-semibold text-base shadow-lg transition-transform transform hover:scale-105"
              >
                <FaUserPlus className="text-white mr-2" size={20} />
                Sign Up
              </Link>
            </div>
          </div>
        </div>

        <motion.div
          className="lg:w-1/2 flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="w-60 h-60 md:w-72 md:h-72 bg-white rounded-2xl flex items-center justify-center shadow-xl border border-gray-200">
            <img
              className="w-52 h-52 md:w-64 md:h-64 object-cover rounded-xl"
              src="https://cdn.pixabay.com/photo/2024/02/20/15/38/ai-generated-8585737_1280.jpg"
            />
          </div>
        </motion.div>
      </div>

      {/* Loans & Benefits Section */}
      <div className="container mx-auto text-center px-4 sm:px-8 py-12 bg-white rounded-3xl shadow-inner">
  <h2 className="text-3xl md:text-4xl font-bold mb-10 text-green-700 drop-shadow-md">
    Why Join Our Chit Fund?
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {[
      {
        icon: <FaPercentage className="text-yellow-500" size={40} />,
        title: "Low Interest Loans",
        desc: "Quick access to low-interest loans with minimal paperwork.",
      },
      {
        icon: <FaMoneyBillWave className="text-green-500" size={40} />,
        title: "Guaranteed Returns",
        desc: "Your contributions grow consistently over time.",
      },
      {
        icon: <FaClock className="text-blue-500" size={40} />,
        title: "Flexible Tenure",
        desc: "Choose from a variety of saving durations as per your need.",
      },
      {
        icon: <FaUsers className="text-indigo-500" size={40} />,
        title: "Trusted by people",
        desc: "Backed by trust, transparency, and tradition.",
      },
    ].map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        className="bg-gradient-to-br from-yellow-50 via-green-50 to-blue-50 border border-blue-200 p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 flex flex-col items-center text-center"
      >
        
        {item.icon}
        <h3 className="text-xl md:text-2xl font-semibold text-green-800 mt-4">
          {item.title}
        </h3>
        <p className="mt-2 md:mt-4 text-blue-700 text-base md:text-lg">
          {item.desc}
        </p>
      </motion.div>
    ))}
  </div>
</div>
    </div>
  );
}

export default Home;
