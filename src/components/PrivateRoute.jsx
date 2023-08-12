import React, { Component } from 'react'
import { Navigate, Route, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
const PrivateRoute = ({ children }) => {
    const { currentUser } = useAuth()

    if (currentUser) {
        return children
    }
    return <Navigate to="/login" />
}
export default PrivateRoute