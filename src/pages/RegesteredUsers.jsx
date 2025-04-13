import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAsyncError, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { GET_ALL_USERS } from '../axios/api';


import {users} from "../data"

const RegisteredUsers = () => {
  // const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchRegisteredUsers = async () => {
    try {
      const token = localStorage.getItem("adminToken");

      if (!token) {
        toast.error("Unauthorized");
        return navigate("/admin-login");
      }

      const response = await axios.get(GET_ALL_USERS, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setUsers(response.data);
      }
    } catch (error) {
      console.log("Error fetching registered users: ", error);
      toast.error("Failed to load registered users");
    }
  };

  useEffect(() => {
    fetchRegisteredUsers();
  }, []);

  return (
    // <div className="min-h-screen bg-gray-50 p-6">
    //   <h1 className="text-2xl font-bold mb-6 text-blue-700">Registered Users</h1>
    //   <div className="overflow-x-auto bg-white rounded-lg shadow p-4">
    //     <table className="text-black min-w-full table-auto">
    //       <thead className="bg-blue-100">
    //         <tr>
    //           <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Name</th>
    //           <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Phone</th>
    //           <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Joined At</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {users.map(user => (
    //           <tr key={user._id} className="border-t">
    //             <td className="px-4 py-2">{user.name}</td>
    //             <td className="px-4 py-2">{user.phone}</td>
    //             <td className="px-4 py-2">{new Date(user.createdAt).toLocaleString()}</td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>
    //   </div>
    // </div>

    <>
      {
        users.map((user) => {
          return 
        })
      }
    </>
  );
};

export default RegisteredUsers;


