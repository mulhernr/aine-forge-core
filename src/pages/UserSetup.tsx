import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import UserSetupForm, { UserData } from '../components/UserSetupForm'
import './UserSetup.css'

function UserSetup() {
  const navigate = useNavigate()

  const handleSetupComplete = (userData: UserData) => {
    // Save user data to localStorage
    localStorage.setItem('userData', JSON.stringify(userData))
    
    // Redirect to dashboard
    navigate('/dashboard')
  }

  return (
    <>
      <Header 
        title="Welcome to Your Dashboard" 
        subtitle="Let's set up your personalized dashboard with your location and weather"
      />
      
      <main className="user-setup-main">
        <div className="user-setup-container">
          <div className="setup-intro">
            <p>
              Welcome! We'll help you create a personalized dashboard that displays 
              your location, current weather, and other useful information at a glance.
            </p>
          </div>

          <UserSetupForm onSubmit={handleSetupComplete} />

          <div className="setup-benefits">
            <h3>What you'll get:</h3>
            <ul>
              <li>📍 Your location displayed on the dashboard</li>
              <li>🌤️ Real-time weather information for your area</li>
              <li>⏰ Current time and date</li>
              <li>✅ Personal to-do list</li>
              <li>💭 Daily inspirational quotes</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}

export default UserSetup
