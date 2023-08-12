import React, { useState, useContext } from 'react'
import { Card, Alert, Button } from "react-bootstrap"
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
const Dashboard = () => {
    const { logout } = useAuth()
    const navigate = useNavigate()
    const handleLogout = () => {
        logout()
        navigate("/login")
    }
    const [error, setError] = useState()
    const { currentUser } = useAuth()
    console.log(currentUser)
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Profile</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <strong>Email: </strong> {currentUser.email}
                    <Link to={"/update-profile"} className='btn btn-primary w-100 mt-2'>Update Profile</Link>
                </Card.Body>
                <Button variant='link' onClick={handleLogout} className='mb-3'>Log out</Button>
            </Card>
        </>
    )
}

export default Dashboard