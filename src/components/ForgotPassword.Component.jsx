import React, { useRef, useState } from 'react'
import { Button, Card, Form, Alert } from "react-bootstrap"
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
const ForgotPassword = () => {
  const emailRef = useRef()
  const { forgot, currentUser,done } = useAuth()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError('')
      setLoading(true)
      await forgot(emailRef.current.value)
      setTimeout(() => {
        navigate("/login")
      }, 2000);
   
      console.log(currentUser)
    } catch (error) {
      setError('Failed to reset password')
      console.log(error)
    }
    setLoading(false)
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='text-center mb-4'>Forgot Password</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <p>Enter your email address and we will send you a link to reset your password.</p>
          <br />
          {done && <Alert variant='success'>Check your email for further instructions</Alert>}

          <form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>
                Email
              </Form.Label>
              <Form.Control type='email' ref={emailRef} required />
            </Form.Group>
            <br />
            <Button disabled={loading} className='w-100' type='submit'>
              Reset
            </Button>
          </form>
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        <Link to={"/login"}>Cancel</Link>
      </div>
    </>
  )
}

export default ForgotPassword