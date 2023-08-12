import React, { useRef, useState } from 'react'
import { Button, Card, Form, Alert } from "react-bootstrap"
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
const Dashboard = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { update, currentUser } = useAuth()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    // console.log(currentUser.email)
    async function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }
        try {
            setError('')
            setLoading(true)
            await update(passwordRef.current.value)
            navigate("/")
        } catch (error) {
            setError('Failed to update the details')
            console.log(error)
        }
        setLoading(false)
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Update Profile</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    

                    <form onSubmit={handleSubmit}>
                        <Form.Group id="email" >
                            <Form.Label>
                                Email
                            </Form.Label>
                            <Form.Control type='email' ref={emailRef} required defaultValue={currentUser.email} />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>
                                Password
                            </Form.Label>
                            <Form.Control type='password' ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>
                                Password Confirmation
                            </Form.Label>
                            <Form.Control type='password' ref={passwordConfirmRef} required />
                        </Form.Group>
                        <br />
                        <Button disabled={loading} className='w-100' type='submit'>
                        Update
                        </Button>
                    </form>

                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
              <Link to={"/"}>Cancel</Link>
            </div>
        </>
    )
}

export default Dashboard