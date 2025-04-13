import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GET_PENDING_USERS, APPROVE_PENDING_USER } from '../axios/api';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const PendingUsers = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchPendingUsers = async () => {
    try {
      const token = localStorage.getItem("adminToken");

      if (!token) {
        toast.error("Unauthorized");
        return navigate("/admin-login");
      }

      const response = await axios.get(GET_PENDING_USERS, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setUsers(response.data);
        toast.success("Users fetched successfully");
      }
    } catch (error) {
      console.log("Error while getting pending users: ", error);
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  const handleApprove = async (userId) => {
    try {
      const token = localStorage.getItem("adminToken");

      const response = await axios.post(`${APPROVE_PENDING_USER}/${userId}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        toast.success("User approved successfully");
        setUsers(users.filter(user => user._id !== userId));
      }
    } catch (error) {
      console.log("Error while approving user: ", error);
      toast.error("Failed to approve user");
    }
  };

  useEffect(() => {
    fetchPendingUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-green-700">Pending Users</h1>

      {users.length === 0 ? (
        <p className="text-gray-600">No pending users found.</p>
      ) : (
        <div className="overflow-x-auto bg-white rounded-lg shadow p-4">
          <table className="text-black min-w-full table-auto">
            <thead className="bg-green-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Phone</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Created At</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="border-t">
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.phone}</td>
                  <td className="px-4 py-2">{new Date(user.createdAt).toLocaleString()}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleApprove(user._id)}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      Accept
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PendingUsers;