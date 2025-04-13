// src/pages/AdminLayout.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Sidebar";

function AdminLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 bg-gray-100 p-4 md:p-6">
        <Outlet /> {/* This renders the nested route content */}
      </main>
    </div>
  );
}

export default AdminLayout;
