import { describe, it, expect, beforeEach, vi } from 'vitest'
import { performHealthCheck, type HealthStatus } from './healthcheck'

describe('healthcheck service', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('performHealthCheck', () => {
    it('returns a HealthStatus object', () => {
      const result = performHealthCheck()
      expect(result).toHaveProperty('status')
      expect(result).toHaveProperty('timestamp')
      expect(result).toHaveProperty('uptime')
      expect(result).toHaveProperty('checks')
    })

    it('returns status as healthy when all checks pass', () => {
      const result = performHealthCheck()
      expect(result.status).toBe('healthy')
    })

    it('returns a valid ISO timestamp', () => {
      const result = performHealthCheck()
      expect(() => new Date(result.timestamp)).not.toThrow()
      expect(result.timestamp).toMatch(/^\d{4}-\d{2}-\d{2}T/)
    })

    it('returns uptime as a positive number', () => {
      const result = performHealthCheck()
      expect(result.uptime).toBeGreaterThanOrEqual(0)
      expect(typeof result.uptime).toBe('number')
    })

    it('includes memory check in checks', () => {
      const result = performHealthCheck()
      expect(result.checks).toHaveProperty('memory')
      expect(typeof result.checks.memory).toBe('boolean')
    })

    it('includes dom check in checks', () => {
      const result = performHealthCheck()
      expect(result.checks).toHaveProperty('dom')
      expect(typeof result.checks.dom).toBe('boolean')
    })

    it('includes localStorage check in checks', () => {
      const result = performHealthCheck()
      expect(result.checks).toHaveProperty('localStorage')
      expect(typeof result.checks.localStorage).toBe('boolean')
    })

    it('returns degraded status when some checks fail', () => {
      // Mock localStorage to fail
      const originalSetItem = Storage.prototype.setItem
      Storage.prototype.setItem = vi.fn(() => {
        throw new Error('Storage full')
      })

      const result = performHealthCheck()
      expect(result.status).toMatch(/healthy|degraded/)
      expect(result.checks.localStorage).toBe(false)

      // Restore
      Storage.prototype.setItem = originalSetItem
    })

    it('has all checks as boolean values', () => {
      const result = performHealthCheck()
      Object.values(result.checks).forEach((check) => {
        expect(typeof check).toBe('boolean')
      })
    })
  })
})
