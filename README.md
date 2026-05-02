# Emotion Design System

A comprehensive, type-safe design system built with React, TypeScript, and Vite. Implements atomic design principles with a dual-token system for flexible theming and semantic styling.

## Overview

The Emotion Design System provides a structured component library organized by atomic design levels (atoms, molecules, organisms) with a comprehensive color token system supporting both design system semantics and the Polestar dark theme implementation.

## Technology Stack

- **React 19.2.4** - UI framework
- **TypeScript 5.9.3** - Type-safe development
- **Vite 8.0.1** - Fast build tooling with HMR
- **Bootstrap 5.3.8** - CSS framework foundation
- **ESLint 9.39.4** - Code quality enforcement

## Project Structure

```bash
src/
├── components/
│   ├── atoms/              # Basic interactive elements
│   │   ├── Button
│   │   ├── OutlineButton
│   │   ├── TextButton
│   │   ├── IconButton
│   │   └── DownloadButton
│   ├── molecules/          # Grouped atom compositions
│   │   └── Card
│   └── organisms/          # Complex component compositions
├── styles/
│   ├── colors.ts          # Design system color tokens (TypeScript)
│   ├── colors.css         # CSS custom properties
│   ├── polestar-tokens.ts # Polestar theme tokens (TypeScript)
│   └── polestar-tokens.css # Polestar CSS variables
└── App.tsx
```

## Design Tokens

### Color System

The design system implements a comprehensive color token architecture with type-safe TypeScript definitions:

#### Primary Token Categories

- **Primary & Secondary** - Brand colors with 10-shade scale (50-900)
- **Semantic Status** - Success, warning, error, info (each with 10-shade scale)
- **Neutral** - Grayscale palette (50-900)
- **Functional Colors**
  - `background` - Primary, secondary, tertiary, overlay, elevated
  - `text` - Primary, secondary, tertiary, inverse, disabled
  - `border` - Primary, secondary, focus, error, success, warning
  - `interactive` - Hover, active, focus, disabled states
  - `accent` - Primary, secondary, highlight
  - `state` - Hover, active, focus, and disabled state variants
  - `surface` - Light and dark surfaces

### Polestar Design Tokens

A minimalist dark theme implementation with:

- **Neutral palette** - Black, white, grey (900-400)
- **Brand colors** - Primary and light variants
- **Surface colors** - Input and active surfaces
- **Typography** - Font families, weights (light-bold), sizes (xs-mega), line heights

## Components

### Atoms

Atomic components are fundamental, reusable building blocks:

#### Button

- Variants: `primary`, `secondary`, `accent`
- Sizes: `small`, `medium`, `large`
- Props: `disabled`, `type`, `onClick`, `className`, `aria-label`

#### OutlineButton

Variant of Button with outline styling

#### TextButton

Variant of Button with text-only styling

#### IconButton

Icon-based interactive button component

#### DownloadButton

Specialized button component for download actions

### Molecules

Molecular components combine atoms for higher-level functionality:

#### Card

Flexible container component for grouped content

- Variants: `default`, `highlighted`, `elevated`
- Props: `interactive`, `disabled`, `className`
- Subcomponents: `Card.Header`, `Card.Title`, `Card.Body`, `Card.Footer`

## Getting Started

### Development

```bash
npm install
npm run dev
```

Starts Vite dev server with HMR at `http://localhost:5173`

### Build

```bash
npm run build
```

Compiles TypeScript and builds optimized production bundle to `dist/`

### Linting

```bash
npm lint
```

Runs ESLint with TypeScript support across the codebase

### Preview

```bash
npm run preview
```

Previews production build locally

## Deployment

### GitHub Pages

Deploy to GitHub Pages using the included gh-pages integration:

```bash
npm run deploy
```

This command:

1. Runs `npm run build` (predeploy hook)
2. Publishes `dist/` to `gh-pages` branch
3. Serves at `https://your-username.github.io/emotion-design-system/`

The Vite configuration is pre-configured with the correct base path (`/emotion-design-system/`) for GitHub Pages hosting.

## Code Quality

- **TypeScript** - Full type safety across all components
- **ESLint** - Enforced linting rules for React and TypeScript
- **Component Documentation** - JSDoc comments with category and usage examples
- **BEM Methodology** - CSS organization using Block Element Modifier pattern

## Type Safety

All components export TypeScript interfaces for props:

- `ButtonProps` - Button component props interface
- `OutlineButtonProps` - Outline button props
- `TextButtonProps` - Text button props
- `CardProps` - Card component props
- `ColorToken` - Design system color token type

## Contributing

When adding new components:

1. Follow atomic design hierarchy (atoms → molecules → organisms)
2. Export types alongside components in `index.ts`
3. Use design tokens from `src/styles/colors.ts` or `polestar-tokens.ts`
4. Include JSDoc comments with `@category`, `@example` tags
5. Style with CSS modules (`.css` files) using BEM conventions
