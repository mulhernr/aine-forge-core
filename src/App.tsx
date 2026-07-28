import { useState } from 'react'
import Header from './components/Header'
import FeatureCard from './components/FeatureCard'
import Counter from './components/Counter'
import './App.css'

function App() {
  const [features] = useState([
    {
      id: 1,
      title: 'TypeScript Support',
      description: 'Full TypeScript support with strict type checking enabled.',
      icon: '📘',
    },
    {
      id: 2,
      title: 'React 18',
      description: 'Built with the latest React 18 features and best practices.',
      icon: '⚛️',
    },
    {
      id: 3,
      title: 'Vite Build',
      description: 'Lightning fast development and build times with Vite.',
      icon: '⚡',
    },
    {
      id: 4,
      title: 'Testing Ready',
      description: 'Vitest and React Testing Library configured and ready to use.',
      icon: '🧪',
    },
  ])

  return (
    <div className="app">
      <Header 
        title="Aine Forge Tester" 
        subtitle="A testing ground for agentic coding tools"
      />
      
      <main className="main-content">
        <section className="features-section">
          <h2>Features</h2>
          <div className="features-grid">
            {features.map((feature) => (
              <FeatureCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </section>

        <section className="demo-section">
          <h2>Interactive Demo</h2>
          <p className="demo-description">
            Try out this simple counter component. Use this as a starting point
            to add more interactive features!
          </p>
          <Counter initialValue={0} />
        </section>

        <section className="info-section">
          <h2>Getting Started</h2>
          <div className="info-card">
            <p>
              This repository is set up as a testing ground for agentic coding tools.
              Feel free to add new features, components, and functionality to test
              your tools' capabilities.
            </p>
            <h3>Suggested Test Scenarios:</h3>
            <ul>
              <li>Add a new component with props and state</li>
              <li>Implement a form with validation</li>
              <li>Create a data fetching feature</li>
              <li>Add routing with React Router</li>
              <li>Implement a theme toggle (dark/light mode)</li>
              <li>Add unit tests for existing components</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Built for testing agentic coding tools</p>
      </footer>
    </div>
  )
}

export default App
