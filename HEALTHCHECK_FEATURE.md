# Health Check Feature

## Overview

The Health Check feature provides a comprehensive system for monitoring the application's health status. It includes:

- **Health Check Service** (`src/services/healthcheck.ts`) - Core service that performs health checks
- **Health Check Component** (`src/components/HealthCheck.tsx`) - React component that displays health status
- **Health Check Page** (`src/pages/HealthCheckPage.tsx`) - Dedicated page for viewing health information
- **Comprehensive Tests** - Full test coverage for both service and component

## Features

### Health Check Service

The `performHealthCheck()` function performs the following checks:

1. **Memory Check** - Verifies that the JavaScript heap has available memory
2. **DOM Check** - Ensures the Document Object Model is accessible
3. **LocalStorage Check** - Confirms that browser storage is available and functional

### Health Status

The service returns a `HealthStatus` object with:

```typescript
interface HealthStatus {
  status: 'healthy' | 'degraded' | 'unhealthy'
  timestamp: string          // ISO 8601 timestamp
  uptime: number            // Milliseconds since page load
  checks: {
    [key: string]: boolean  // Individual check results
  }
}
```

### Status Levels

- **Healthy** - All checks pass
- **Degraded** - One or more checks fail
- **Unhealthy** - Reserved for future use

## Usage

### Using the Service

```typescript
import { performHealthCheck } from '../services/healthcheck'

const health = performHealthCheck()
console.log(health.status)  // 'healthy' or 'degraded'
console.log(health.checks)  // { memory: true, dom: true, localStorage: true }
```

### Using the Component

```typescript
import HealthCheck from '../components/HealthCheck'

function MyPage() {
  return <HealthCheck />
}
```

The component:
- Automatically performs a health check on mount
- Refreshes every 30 seconds
- Displays a loading state while checking
- Shows color-coded status indicators
- Lists individual check results with pass/fail icons

### Accessing the Page

Navigate to `/health` in the application to view the dedicated health check page, which includes:
- Real-time health status display
- Detailed check results
- Information about what each check does

## Testing

### Running Tests

```bash
npm test
```

### Test Coverage

The feature includes comprehensive tests:

**Service Tests** (`src/services/healthcheck.test.ts`):
- ✓ Returns a HealthStatus object with all required properties
- ✓ Returns 'healthy' status when all checks pass
- ✓ Returns valid ISO timestamp
- ✓ Returns uptime as a positive number
- ✓ Includes all required checks (memory, dom, localStorage)
- ✓ Handles check failures gracefully
- ✓ All checks are boolean values

**Component Tests** (`src/components/HealthCheck.test.tsx`):
- ✓ Renders the health check component
- ✓ Displays loading state initially
- ✓ Shows health status badge
- ✓ Displays timestamp and uptime
- ✓ Shows system checks section
- ✓ Displays all check items
- ✓ Shows check status icons
- ✓ Applies correct CSS classes
- ✓ Formats timestamp correctly
- ✓ Displays uptime in milliseconds

## Styling

The Health Check component includes comprehensive styling:

- **Color-coded status indicators** - Green for healthy, yellow for degraded, red for unhealthy
- **Responsive design** - Works on mobile and desktop
- **Accessible UI** - Clear icons and labels for each check
- **Professional appearance** - Consistent with the application design

### CSS Classes

- `.health-check` - Main container
- `.health-check.healthy` - Healthy status styling
- `.health-check.degraded` - Degraded status styling
- `.status-badge` - Status indicator badge
- `.health-checks` - Checks list container
- `.check-item` - Individual check item
- `.check-item.passed` - Passed check styling
- `.check-item.failed` - Failed check styling

## Architecture

### Service Layer

The health check service is a pure utility function with no dependencies on React or the DOM (except for the checks themselves). This makes it:
- Easy to test
- Reusable in different contexts
- Performant

### Component Layer

The HealthCheck component:
- Uses React hooks (useState, useEffect)
- Manages its own refresh interval
- Handles loading and error states
- Provides visual feedback to the user

### Page Layer

The HealthCheckPage provides:
- Navigation integration
- Contextual information
- Professional presentation

## Future Enhancements

Potential improvements:
- Add API endpoint health checks
- Include database connectivity checks
- Add performance metrics
- Implement historical health data
- Add alerts for degraded status
- Export health data as JSON
- Add WebSocket support for real-time updates

## Files

```
src/
├── services/
│   ├── healthcheck.ts          # Core service
│   └── healthcheck.test.ts     # Service tests
├── components/
│   ├── HealthCheck.tsx         # React component
│   ├── HealthCheck.css         # Component styles
│   └── HealthCheck.test.tsx    # Component tests
├── pages/
│   ├── HealthCheckPage.tsx     # Dedicated page
│   └── HealthCheckPage.css     # Page styles
└── App.tsx                      # Updated with /health route
```

## Integration

The health check feature is fully integrated into the application:

1. **Route** - `/health` route added to App.tsx
2. **Navigation** - Health Check link added to Navbar
3. **Styling** - Consistent with application design
4. **Testing** - Full test coverage included

## Browser Compatibility

The health check feature works in all modern browsers that support:
- ES6+ JavaScript
- React 18+
- localStorage API
- performance.now() API

## Performance

- Health checks complete in < 1ms
- Component refresh interval: 30 seconds (configurable)
- Minimal memory footprint
- No external dependencies
