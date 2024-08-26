import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
    const auth = localStorage.getItem("isadmin")
    return (
        auth === 'true' ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoutes
