import React, { useRef, useState } from 'react'
import { Button, Card, Form, Alert } from "react-bootstrap"
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { login, currentUser } = useAuth()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate("/")
            console.log(currentUser)
        } catch (error) {
            setError('Failed to Sign in')
            console.log(error)
        }
        setLoading(false)
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'>Login</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>
                                Email
                            </Form.Label>
                            <Form.Control type='email' ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>
                                Password
                            </Form.Label>
                            <Form.Control type='password' ref={passwordRef} required />
                        </Form.Group>
                        <br />
                        <Button disabled={loading} className='w-100' type='submit'>
                            Login
                        </Button>
                    </form>
                    <div className='w-100 text-center mt-3'>
            Forgot password? <Link to={"/forgot-password"}> Reset</Link>
            </div>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                Need an account? <Link to={"/signup"}> Sign up</Link>
            </div>
        </>
    )
}

export default Login