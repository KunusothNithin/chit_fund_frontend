import React from 'react'
import { Navigate } from 'react-router-dom'

const AdminProtectedRoute = ({children}) => {

  return (
    <>
        {
            localStorage.getItem("adminToken") ? children : <Navigate to={"/admin-login"} />
        }
    </>
  )
}

export default AdminProtectedRoute