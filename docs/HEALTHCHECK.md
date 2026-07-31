# Healthcheck: Running Aine Forge Tester Locally

This guide explains how to run the Aine Forge Tester application locally to verify it's working correctly.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18 or higher
- **npm** 9 or higher

You can check your versions by running:

```bash
node --version
npm --version
```

## Installation

1. **Clone the repository** (if you haven't already):

```bash
git clone https://github.com/royceacho-wwt/aine-forge-tester.git
cd aine-forge-tester
```

2. **Install dependencies**:

```bash
npm install
```

This will install all required packages listed in `package.json`.

## Running the Development Server

To start the local development server:

```bash
npm run dev
```

You should see output similar to:

```
  VITE v4.5.14  ready in 123 ms

  ➜  Local:   http://localhost:5173/aine-forge-tester/
  ➜  press h to show help
```

Open your browser and navigate to `http://localhost:5173/aine-forge-tester/` to view the application.

## Verifying the App is Working

Once the app loads in your browser, you should see:

- **Header** with the title "Aine Forge Tester"
- **Feature cards** displaying information about the project setup
- **Counter component** with increment/decrement buttons that work when clicked

If you can interact with these elements, the app is running correctly.

## Running Tests

To verify the application's test suite passes:

```bash
npm run test
```

For continuous testing during development:

```bash
npm run test:watch
```

To generate a coverage report:

```bash
npm run test:coverage
```

## Linting

To check code quality and style:

```bash
npm run lint
```

## Building for Production

To create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically try the next available port. Check the terminal output for the actual URL.

### Module Not Found Errors

If you encounter module errors, try:

```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

Ensure your TypeScript version is up to date:

```bash
npm install --save-dev typescript@latest
```

## Quick Healthcheck Script

Run all checks to verify everything is working:

```bash
npm run lint && npm run test && npm run build
```

If all commands complete successfully, your local environment is properly configured.

## Next Steps

- Review the [README.md](../README.md) for project overview and structure
- Check the `.github/workflows/ci.yml` for CI/CD pipeline details
- Explore the `src/` directory to understand the component structure
