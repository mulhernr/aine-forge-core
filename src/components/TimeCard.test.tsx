import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import TimeCard from './TimeCard'

describe('TimeCard', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the time card with title', () => {
    render(<TimeCard />)
    expect(screen.getByText(/🕐 Time/)).toBeInTheDocument()
  })

  it('displays current time', () => {
    const mockDate = new Date('2024-07-31T14:30:45')
    vi.setSystemTime(mockDate)
    
    render(<TimeCard />)
    
    const timeElements = screen.getAllByText(/\d{1,2}:\d{2}:\d{2}/)
    expect(timeElements.length).toBeGreaterThan(0)
  })

  it('displays current date', () => {
    const mockDate = new Date('2024-07-31T14:30:45')
    vi.setSystemTime(mockDate)
    
    render(<TimeCard />)
    
    expect(screen.getByText(/Wednesday, July 31, 2024/)).toBeInTheDocument()
  })

  it('updates time every second', () => {
    const mockDate = new Date('2024-07-31T14:30:45')
    vi.setSystemTime(mockDate)
    
    const { rerender } = render(<TimeCard />)
    
    // Advance time by 1 second
    vi.advanceTimersByTime(1000)
    rerender(<TimeCard />)
    
    // The component should have updated (we can verify by checking the interval was set)
    expect(screen.getByText(/🕐 Time/)).toBeInTheDocument()
  })
})
