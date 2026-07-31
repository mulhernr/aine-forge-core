// Main App component
// This is the second comment
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import GettingStarted from './pages/GettingStarted'
import UserSetup from './pages/UserSetup'
import './App.css'

function App() {
  return (
    <Router basename="/aine-forge-tester/">
      <div className="app">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/setup" element={<UserSetup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/getting-started" element={<GettingStarted />} />
        </Routes>

        <footer className="footer">
          <p>Built for testing agentic coding tools 🛠️</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
