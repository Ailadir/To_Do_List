# Todo Application

A modern, responsive Todo application built with React and TypeScript, featuring Material-UI components for a polished user interface.

## Features

- ✨ Create new todos with an intuitive input interface
- ✅ Toggle todo completion status
- 🔍 Filter todos by status (All/Active/Completed)
- 🗑️ Clear completed todos
- 💅 Modern UI with Material-UI components
- 🎯 Fully typed with TypeScript
- ✔️ Comprehensive test coverage

## Tech Stack

- React 19
- TypeScript
- Material-UI v7
- Jest & React Testing Library
- Rsbuild for build tooling

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

## Installation & Usage

Choose **one** of the package managers and use it consistently:

### Usaging with npm

```bash
# Install dependencies
npm install / npm i

# Start development server
npm start / npm run start

# Run tests
npm test

# Build for production
npm run build
```

### Usaging with yarn

```bash
# Install dependencies
yarn

# Start development server
yarn start

# Run tests
yarn test

# Build for production
yarn build
```

The application will be available at `http://localhost:3000` by default.

## Project Structure

```
src/
├── components/
│   ├── Todo/           # Main Todo component
│   ├── TodoList/       # List of todo items
│   ├── TodoListItem/   # Individual todo item
│   ├── TodoFilters/    # Filtering components
│   ├── TextInput/      # Reusable input component
│   └── Checkbox/       # Custom checkbox component
├── types/              # TypeScript type definitions
└── hooks/              # Custom React hooks
```

## Testing Coverage

The application includes comprehensive test coverage for core components:

- **Todo Component**: 6 test cases covering core functionality

  - Rendering
  - Adding todos
  - Empty todo validation
  - Todo status toggling
  - Filtering
  - Clearing completed todos

- **TextInput Component**: 3 test cases

  - Rendering with label
  - Input value updates
  - Enter key submission

- **TodoList Component**: 3 test cases
  - Empty state rendering
  - Todo items rendering
  - Toggle functionality

## Development Decisions

- Used Material-UI for consistent, professional UI components
- Implemented TypeScript for better type safety and development experience
- Separated concerns into reusable components
- Added comprehensive testing using Jest and React Testing Library
- Used modern React practices including hooks and functional components

## Author

[Araz Schwarz]
