import Sidebar from "./Sidebar";

import {
  FaMoneyCheckAlt,
  FaUsers,
  FaCalendarAlt,
  FaChartLine,
  FaArrowAltCircleUp,
  FaArrowAltCircleDown,
} from "react-icons/fa";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function AdminDashboard() {
  return (
    <div className="flex">
      <main className="flex-1 bg-gray-100 p-4 md:p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Chit Fund Dashboard</h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <SummaryCard icon={<FaMoneyCheckAlt />} title="Total Fund Collected" value="₹12,50,000" />
          <SummaryCard icon={<FaUsers />} title="Active Members" value="128" />
          <SummaryCard icon={<FaArrowAltCircleUp />} title="Loans Issued" value="58" />
          <SummaryCard icon={<FaArrowAltCircleDown />} title="Loans Repaid" value="34" />
        </div>

        {/* Progress & Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatChart title="Monthly Contributions" />
          <StatChart title="Yearly Growth" />
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center">
            <CircularProgressbar
              value={70}
              text={`70%`}
              styles={buildStyles({ textColor: "#1f2937", pathColor: "#10b981" })}
            />
            <p className="mt-4 text-gray-600">Overall Fund Utilization</p>
            <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
              View Details
            </button>
          </div>
        </div>

        {/* Loan Details */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Loan Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <LoanInfoCard title="Pending Loans" count="24" color="yellow" />
            <LoanInfoCard title="Approved This Month" count="12" color="blue" />
            <LoanInfoCard title="Total Repaid" count="34" color="green" />
          </div>
        </div>

        {/* Public Summary */}
        <div className="bg-blue-50 border border-blue-300 rounded-lg p-6 mt-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Public Financial Summary</h2>
          <p className="text-blue-700">
            This dashboard gives a transparent summary of this committee’s current funds, contributions, and loans.
            All members can view the activities, track growth, and stay informed about financial planning.
          </p>
        </div>
      </main>
    </div>
  );
}

const SummaryCard = ({ icon, title, value }) => (
  <div className="bg-white shadow-md p-6 rounded-lg flex items-center space-x-4">
    <div className="text-3xl text-green-600">{icon}</div>
    <div>
      <h3 className="text-gray-600 text-sm">{title}</h3>
      <p className="text-xl font-bold text-gray-900">{value}</p>
    </div>
  </div>
);

const StatChart = ({ title }) => (
  <div className="bg-white shadow-md rounded-lg p-6">
    <h3 className="text-gray-700 font-semibold text-lg mb-4">{title}</h3>
    <div className="bg-gray-200 h-32 rounded-lg"></div>
    {/* Replace with real chart */}
  </div>
);

const LoanInfoCard = ({ title, count, color }) => {
  const colors = {
    yellow: "bg-yellow-100 text-yellow-700",
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
  };

  return (
    <div className={`p-4 rounded-lg shadow ${colors[color]} text-center`}>
      <h4 className="text-lg font-bold">{count}</h4>
      <p className="text-sm">{title}</p>
    </div>
  );
};

export default AdminDashboard;
