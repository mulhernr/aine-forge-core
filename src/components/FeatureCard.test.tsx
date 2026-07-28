import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import FeatureCard from './FeatureCard'

describe('FeatureCard', () => {
  it('renders the title', () => {
    render(
      <FeatureCard 
        title="Test Feature" 
        description="Test description" 
        icon="🚀" 
      />
    )
    expect(screen.getByText('Test Feature')).toBeInTheDocument()
  })

  it('renders the description', () => {
    render(
      <FeatureCard 
        title="Test Feature" 
        description="Test description" 
        icon="🚀" 
      />
    )
    expect(screen.getByText('Test description')).toBeInTheDocument()
  })

  it('renders the icon', () => {
    render(
      <FeatureCard 
        title="Test Feature" 
        description="Test description" 
        icon="🚀" 
      />
    )
    expect(screen.getByText('🚀')).toBeInTheDocument()
  })
})
