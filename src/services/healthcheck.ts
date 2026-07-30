/**
 * Health check service
 * Provides utilities to check the application health status
 */

export interface HealthStatus {
  status: 'healthy' | 'degraded' | 'unhealthy'
  timestamp: string
  uptime: number
  checks: {
    [key: string]: boolean
  }
}

/**
 * Performs a basic health check on the application
 * @returns HealthStatus object with current health information
 */
export function performHealthCheck(): HealthStatus {
  const checks: { [key: string]: boolean } = {
    memory: checkMemory(),
    dom: checkDOM(),
    localStorage: checkLocalStorage(),
  }

  const healthyChecks = Object.values(checks).filter(Boolean).length
  const totalChecks = Object.keys(checks).length
  const allHealthy = healthyChecks === totalChecks

  return {
    status: allHealthy ? 'healthy' : 'degraded',
    timestamp: new Date().toISOString(),
    uptime: performance.now(),
    checks,
  }
}

/**
 * Checks if memory is available
 */
function checkMemory(): boolean {
  try {
    if (performance.memory) {
      return performance.memory.jsHeapSizeLimit > 0
    }
    return true // Assume healthy if not available
  } catch {
    return false
  }
}

/**
 * Checks if DOM is accessible
 */
function checkDOM(): boolean {
  try {
    return document !== undefined && document.body !== null
  } catch {
    return false
  }
}

/**
 * Checks if localStorage is accessible
 */
function checkLocalStorage(): boolean {
  try {
    const testKey = '__health_check_test__'
    localStorage.setItem(testKey, 'test')
    localStorage.removeItem(testKey)
    return true
  } catch {
    return false
  }
}
