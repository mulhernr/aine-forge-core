import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import GettingStarted from './pages/GettingStarted'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
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
