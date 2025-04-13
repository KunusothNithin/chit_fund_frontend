import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Plans() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const plans = [
    { name: "Starter Plan", monthly: 5000, tenure: 12, interest: 1, color: "bg-green-600" },
    { name: "Growth Plan", monthly: 10000, tenure: 24, interest: 1, color: "bg-yellow-500" },
    { name: "Premium Plan", monthly: 20000, tenure: 36, interest: 1, color: "bg-blue-600" },
    { name: "Special Plan", monthly: 30000, tenure: 48, interest: 2, color: "bg-purple-600" },
  ];

  const totalCards = plans.length;

  const nextIndex = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  useEffect(() => {
    const interval = setInterval(nextIndex, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-blue-100 flex flex-col items-center justify-center p-10 overflow-hidden">
      <h1 className="text-5xl font-bold text-center text-green-700">Chit Fund Plans</h1>
      <p className="text-center text-red-600 mt-2 text-lg">Choose from a variety of investment plans tailored for you.</p>

      {/* Cards Wrapper */}
      <div className="relative w-full max-w-7xl mt-12 flex justify-center items-center overflow-visible h-[500px]">
        {plans.map((plan, index) => {
          const relativeIndex = (index - currentIndex + totalCards) % totalCards;

          let xOffset = 0;
          let scale = 1;
          let width = "w-[90%] sm:w-[500px] lg:w-[550px]";
          let height = "h-[300px] sm:h-[350px] lg:h-[380px]";
          let opacity = 1;
          let zIndex = 1;

          if (relativeIndex === 0) { // Left Card
            xOffset = "-400px";
            scale = 0.85;
            width = "w-[80%] sm:w-[450px] lg:w-[500px]";
            height = "h-[270px] sm:h-[320px] lg:h-[350px]";
            opacity = 0.8;
            zIndex = 5;
          } else if (relativeIndex === 1) { // Active Center Card
            xOffset = "0px";
            scale = 1.05;
            width = "w-[95%] sm:w-[550px] lg:w-[600px]";
            height = "h-[320px] sm:h-[380px] lg:h-[420px]";
            opacity = 1;
            zIndex = 10;
          } else if (relativeIndex === 2) { // Right Card
            xOffset = "400px";
            scale = 0.85;
            width = "w-[80%] sm:w-[450px] lg:w-[500px]";
            height = "h-[270px] sm:h-[320px] lg:h-[350px]";
            opacity = 0.8;
            zIndex = 5;
          } else { // Hidden Cards
            opacity = 0;
            zIndex = 0;
          }

          return (
            <motion.div
              key={index}
              className={`${width} ${height} ${plan.color} text-white p-8 flex flex-col justify-center items-center rounded-[40px] shadow-2xl absolute`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ x: xOffset, scale, opacity }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              style={{ zIndex: zIndex }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold drop-shadow-lg">{plan.name}</h2>
              <p className="mt-2 text-base sm:text-lg">💰 Monthly: ₹{plan.monthly}</p>
              <p className="text-base sm:text-lg">📅 Tenure: {plan.tenure} Months</p>
              <p className="text-base sm:text-lg">📈 Interest: {plan.interest}%</p>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-6 space-x-3">
        {plans.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full cursor-pointer transition-all ${currentIndex === index ? "bg-blue-400 scale-110" : "bg-gray-500"}`}
          ></div>
        ))}
      </div>

      {/* Manual Navigation Buttons */}
      <div className="flex mt-6 space-x-5">
        <button
          onClick={() => setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards)}
          className="px-6 py-3 bg-gray-700 text-white rounded-full text-lg hover:bg-gray-600 transition-all"
        >
          ⬅️ Previous
        </button>
        <button
          onClick={nextIndex}
          className="px-6 py-3 bg-gray-700 text-white rounded-full text-lg hover:bg-gray-600 transition-all"
        >
          Next ➡️
        </button>
      </div>
    </div>
  );
}

export default Plans;
