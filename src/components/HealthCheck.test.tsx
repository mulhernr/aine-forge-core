import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import HealthCheck from './HealthCheck'

// Mock the healthcheck service
vi.mock('../services/healthcheck', () => ({
  performHealthCheck: vi.fn(() => ({
    status: 'healthy',
    timestamp: '2024-01-01T12:00:00.000Z',
    uptime: 1000,
    checks: {
      memory: true,
      dom: true,
      localStorage: true,
    },
  })),
}))

describe('HealthCheck Component', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders the health check component', async () => {
    render(<HealthCheck />)
    await waitFor(() => {
      expect(screen.getByText('Health Status')).toBeInTheDocument()
    })
  })

  it('displays loading state initially', () => {
    render(<HealthCheck />)
    expect(screen.getByText('Loading health status...')).toBeInTheDocument()
  })

  it('displays the health status badge', async () => {
    render(<HealthCheck />)
    await waitFor(() => {
      expect(screen.getByText('HEALTHY')).toBeInTheDocument()
    })
  })

  it('displays the timestamp', async () => {
    render(<HealthCheck />)
    await waitFor(() => {
      expect(screen.getByText(/Timestamp:/)).toBeInTheDocument()
    })
  })

  it('displays the uptime', async () => {
    render(<HealthCheck />)
    await waitFor(() => {
      expect(screen.getByText(/Uptime:/)).toBeInTheDocument()
    })
  })

  it('displays system checks section', async () => {
    render(<HealthCheck />)
    await waitFor(() => {
      expect(screen.getByText('System Checks')).toBeInTheDocument()
    })
  })

  it('displays all check items', async () => {
    render(<HealthCheck />)
    await waitFor(() => {
      expect(screen.getByText('memory')).toBeInTheDocument()
      expect(screen.getByText('dom')).toBeInTheDocument()
      expect(screen.getByText('localStorage')).toBeInTheDocument()
    })
  })

  it('displays check status icons', async () => {
    render(<HealthCheck />)
    await waitFor(() => {
      const checkIcons = screen.getAllByText('✓')
      expect(checkIcons.length).toBeGreaterThan(0)
    })
  })

  it('applies correct CSS class for healthy status', async () => {
    const { container } = render(<HealthCheck />)
    await waitFor(() => {
      const healthCheckDiv = container.querySelector('.health-check.healthy')
      expect(healthCheckDiv).toBeInTheDocument()
    })
  })

  it('displays formatted timestamp', async () => {
    render(<HealthCheck />)
    await waitFor(() => {
      // The timestamp should be formatted as a locale string
      const timestampText = screen.getByText(/Timestamp:/).parentElement?.textContent
      expect(timestampText).toContain('Timestamp:')
    })
  })

  it('displays uptime in milliseconds', async () => {
    render(<HealthCheck />)
    await waitFor(() => {
      expect(screen.getByText(/Uptime:.*ms/)).toBeInTheDocument()
    })
  })
})
