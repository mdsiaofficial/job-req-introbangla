
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import UserProfile from './pages/UserProfile';
import { useState } from 'react';
import Login from './pages/Login';
import ProtectedRoute from './pages/ProtectedRoute';
import Dashboard from './pages/Dashboard';
function App() {
  const [auth, setAuth] = useState(false);

  return (
    <Router>
      <nav>
        <ul style={{ color: "crimson", fontSize: "36px", border: "1px solid yellow", padding: "", display: "flex", gap: "60px" }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>

          <li><Link to="/user/1">User 1</Link></li>
          <li><Link to="/user/2">User 2</Link></li>
          <li><Link to="/user/3">User 3</Link></li>
          <li><Link to="/user/4">User 4</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login auth={auth} setAuth={setAuth}><Dashboard/></Login>} />
        <Route path="/dashboard"
          element={
            <ProtectedRoute auth={auth}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id" element={<UserProfile />} />

      </Routes>
    </Router>
  );
}

export default App
