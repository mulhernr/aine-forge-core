import { useState } from 'react'
import Header from '../components/Header'
import FeatureCard from '../components/FeatureCard'
import Counter from '../components/Counter'
import './Home.css'

function Home() {
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
    <>
      <Header 
        title="Aine Forge Tester" 
        subtitle="A testing ground for agentic coding tools"
      />
      
      <main className="main-content">
        <section className="features-section">
          <h2>✨ Features</h2>
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
          <h2>🎮 Interactive Demo</h2>
          <p className="demo-description">
            Try out this simple counter component. Use this as a starting point
            to add more interactive features!
          </p>
          <Counter initialValue={0} />
        </section>
      </main>
    </>
  )
}

export default Home
