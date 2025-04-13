import { Link, Outlet, useLocation } from "react-router-dom";
import { FaUserClock, FaUserCheck, FaTachometerAlt } from "react-icons/fa";

function  Sidebar() {
  const { pathname } = useLocation();

  const linkStyle = (path) =>
    `flex items-center space-x-2 p-3 rounded-md hover:bg-green-100 ${
      pathname === path ? "bg-green-200 font-semibold" : "text-gray-700"
    }`;

  return (

    <div className="w-full md:w-64 bg-white shadow-md p-4 min-h-screen sticky top-0">
            <h2 className="text-2xl font-bold text-green-600 mb-6">Admin Panel</h2>
            <nav className="space-y-3">
              <Link to="/admin-dashboard" className={linkStyle("/admin-dashboard")}>
                <FaTachometerAlt />
                <span>Dashboard</span>
              </Link>
              <Link to="/admin-dashboard/pending-users" className={linkStyle("/pending-users")}>
                <FaUserClock />
                <span>Pending Users</span>
              </Link>
              <Link to="/admin-dashboard/registered-users" className={linkStyle("/registered-users")}>
                <FaUserCheck />
                <span>Registered Users</span>
              </Link>
            </nav>
          </div>
  );
}

export default Sidebar;
