import Header from '../components/Header'
import HealthCheck from '../components/HealthCheck'
import './HealthCheckPage.css'

function HealthCheckPage() {
  return (
    <>
      <Header 
        title="Health Check" 
        subtitle="Monitor the application health status"
      />
      
      <main className="healthcheck-page-content">
        <section className="healthcheck-section">
          <HealthCheck />
        </section>

        <section className="healthcheck-info">
          <h2>About Health Checks</h2>
          <p>
            The health check endpoint monitors the application's critical systems to ensure
            everything is running smoothly. It performs checks on:
          </p>
          <ul>
            <li><strong>Memory:</strong> Verifies that the JavaScript heap has available memory</li>
            <li><strong>DOM:</strong> Ensures the Document Object Model is accessible</li>
            <li><strong>LocalStorage:</strong> Confirms that browser storage is available and functional</li>
          </ul>
          <p>
            The application is considered <strong>healthy</strong> when all checks pass, and
            <strong>degraded</strong> when one or more checks fail.
          </p>
        </section>
      </main>
    </>
  )
}

export default HealthCheckPage
