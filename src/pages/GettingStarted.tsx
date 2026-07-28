import './GettingStarted.css'

function GettingStarted() {
  return (
    <div className="getting-started-page">
      <div className="getting-started-header">
        <h1>🚀 Getting Started</h1>
        <p className="getting-started-intro">
          Welcome to the Aine Forge Tester! This repository is set up as a testing ground 
          for agentic coding tools. Feel free to add new features, components, and 
          functionality to test your tools' capabilities.
        </p>
      </div>

      <section className="getting-started-section">
        <h2>📋 Suggested Test Scenarios</h2>
        <div className="scenario-grid">
          <div className="scenario-card">
            <span className="scenario-icon">🧩</span>
            <h3>Add a New Component</h3>
            <p>Create a new component with props and state management</p>
          </div>
          <div className="scenario-card">
            <span className="scenario-icon">📝</span>
            <h3>Implement a Form</h3>
            <p>Build a form with validation and error handling</p>
          </div>
          <div className="scenario-card">
            <span className="scenario-icon">🌐</span>
            <h3>Data Fetching</h3>
            <p>Create a feature that fetches and displays data from an API</p>
          </div>
          <div className="scenario-card">
            <span className="scenario-icon">🔀</span>
            <h3>Add Routing</h3>
            <p>Implement additional routes with React Router</p>
          </div>
          <div className="scenario-card">
            <span className="scenario-icon">🎨</span>
            <h3>Theme Toggle</h3>
            <p>Implement a dark/light mode theme toggle</p>
          </div>
          <div className="scenario-card">
            <span className="scenario-icon">🧪</span>
            <h3>Unit Tests</h3>
            <p>Add unit tests for existing components</p>
          </div>
        </div>
      </section>

      <section className="getting-started-section">
        <h2>⚡ Quick Start Commands</h2>
        <div className="commands-card">
          <div className="command-item">
            <code>npm run dev</code>
            <span>Start the development server</span>
          </div>
          <div className="command-item">
            <code>npm run build</code>
            <span>Build for production</span>
          </div>
          <div className="command-item">
            <code>npm run test</code>
            <span>Run the test suite</span>
          </div>
          <div className="command-item">
            <code>npm run lint</code>
            <span>Check for linting errors</span>
          </div>
        </div>
      </section>

      <section className="getting-started-section">
        <h2>📁 Project Structure</h2>
        <div className="structure-card">
          <pre>{`src/
├── components/     # Reusable UI components
├── test/           # Test utilities and setup
├── App.tsx         # Main application component
├── App.css         # Application styles
├── index.css       # Global styles
└── main.tsx        # Application entry point`}</pre>
        </div>
      </section>
    </div>
  )
}

export default GettingStarted
