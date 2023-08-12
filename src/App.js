import React from "react";
import Signup from "./components/Signup.Component";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./components/Dashboard.Component";
import Login from "./components/Login.Component";
import UpdateProfile from "./components/UpdateProfile.Component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PrivateRoute from "./components/PrivateRoute";
function App() {
  return (

    <Container className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/" element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              } />
              <Route path="/signup" Component={Signup} />
              <Route path="/login" Component={Login} />
              <Route path="/update-profile" Component={UpdateProfile} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
