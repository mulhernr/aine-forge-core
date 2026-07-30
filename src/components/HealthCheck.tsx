import { useEffect, useState } from 'react'
import { performHealthCheck, type HealthStatus } from '../services/healthcheck'
import './HealthCheck.css'

function HealthCheck() {
  const [health, setHealth] = useState<HealthStatus | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkHealth = () => {
      const healthStatus = performHealthCheck()
      setHealth(healthStatus)
      setLoading(false)
    }

    checkHealth()
    // Refresh health check every 30 seconds
    const interval = setInterval(checkHealth, 30000)

    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return <div className="health-check loading">Loading health status...</div>
  }

  if (!health) {
    return <div className="health-check error">Unable to retrieve health status</div>
  }

  const statusClass = `health-check ${health.status}`

  return (
    <div className={statusClass}>
      <div className="health-check-header">
        <h2>Health Status</h2>
        <span className={`status-badge ${health.status}`}>{health.status.toUpperCase()}</span>
      </div>

      <div className="health-check-content">
        <div className="health-info">
          <p>
            <strong>Timestamp:</strong> {new Date(health.timestamp).toLocaleString()}
          </p>
          <p>
            <strong>Uptime:</strong> {Math.round(health.uptime)}ms
          </p>
        </div>

        <div className="health-checks">
          <h3>System Checks</h3>
          <ul>
            {Object.entries(health.checks).map(([checkName, passed]) => (
              <li key={checkName} className={`check-item ${passed ? 'passed' : 'failed'}`}>
                <span className="check-icon">{passed ? '✓' : '✗'}</span>
                <span className="check-name">{checkName}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HealthCheck
