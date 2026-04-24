/**
 * Design System Color Palette
 * TypeScript definitions for CSS color variables
 * Used for type-safe color references in React components
 */

export const dsColors = {
  /* Primary Colors */
  primary: {
    50: 'var(--ds-color-primary-50)',
    100: 'var(--ds-color-primary-100)',
    200: 'var(--ds-color-primary-200)',
    300: 'var(--ds-color-primary-300)',
    400: 'var(--ds-color-primary-400)',
    500: 'var(--ds-color-primary-500)',
    600: 'var(--ds-color-primary-600)',
    700: 'var(--ds-color-primary-700)',
    800: 'var(--ds-color-primary-800)',
    900: 'var(--ds-color-primary-900)',
  },

  /* Secondary Colors */
  secondary: {
    50: 'var(--ds-color-secondary-50)',
    100: 'var(--ds-color-secondary-100)',
    200: 'var(--ds-color-secondary-200)',
    300: 'var(--ds-color-secondary-300)',
    400: 'var(--ds-color-secondary-400)',
    500: 'var(--ds-color-secondary-500)',
    600: 'var(--ds-color-secondary-600)',
    700: 'var(--ds-color-secondary-700)',
    800: 'var(--ds-color-secondary-800)',
    900: 'var(--ds-color-secondary-900)',
  },

  /* Semantic Status Colors */
  success: {
    50: 'var(--ds-color-success-50)',
    100: 'var(--ds-color-success-100)',
    200: 'var(--ds-color-success-200)',
    300: 'var(--ds-color-success-300)',
    400: 'var(--ds-color-success-400)',
    500: 'var(--ds-color-success-500)',
    600: 'var(--ds-color-success-600)',
    700: 'var(--ds-color-success-700)',
    800: 'var(--ds-color-success-800)',
    900: 'var(--ds-color-success-900)',
  },

  warning: {
    50: 'var(--ds-color-warning-50)',
    100: 'var(--ds-color-warning-100)',
    200: 'var(--ds-color-warning-200)',
    300: 'var(--ds-color-warning-300)',
    400: 'var(--ds-color-warning-400)',
    500: 'var(--ds-color-warning-500)',
    600: 'var(--ds-color-warning-600)',
    700: 'var(--ds-color-warning-700)',
    800: 'var(--ds-color-warning-800)',
    900: 'var(--ds-color-warning-900)',
  },

  error: {
    50: 'var(--ds-color-error-50)',
    100: 'var(--ds-color-error-100)',
    200: 'var(--ds-color-error-200)',
    300: 'var(--ds-color-error-300)',
    400: 'var(--ds-color-error-400)',
    500: 'var(--ds-color-error-500)',
    600: 'var(--ds-color-error-600)',
    700: 'var(--ds-color-error-700)',
    800: 'var(--ds-color-error-800)',
    900: 'var(--ds-color-error-900)',
  },

  info: {
    50: 'var(--ds-color-info-50)',
    100: 'var(--ds-color-info-100)',
    200: 'var(--ds-color-info-200)',
    300: 'var(--ds-color-info-300)',
    400: 'var(--ds-color-info-400)',
    500: 'var(--ds-color-info-500)',
    600: 'var(--ds-color-info-600)',
    700: 'var(--ds-color-info-700)',
    800: 'var(--ds-color-info-800)',
    900: 'var(--ds-color-info-900)',
  },

  /* Neutral Colors */
  neutral: {
    50: 'var(--ds-color-neutral-50)',
    100: 'var(--ds-color-neutral-100)',
    200: 'var(--ds-color-neutral-200)',
    300: 'var(--ds-color-neutral-300)',
    400: 'var(--ds-color-neutral-400)',
    500: 'var(--ds-color-neutral-500)',
    600: 'var(--ds-color-neutral-600)',
    700: 'var(--ds-color-neutral-700)',
    800: 'var(--ds-color-neutral-800)',
    900: 'var(--ds-color-neutral-900)',
  },

  /* Functional Colors */
  background: {
    primary: 'var(--ds-color-bg-primary)',
    secondary: 'var(--ds-color-bg-secondary)',
    tertiary: 'var(--ds-color-bg-tertiary)',
    overlay: 'var(--ds-color-bg-overlay)',
    elevated: 'var(--ds-color-bg-elevated)',
  },

  text: {
    primary: 'var(--ds-color-text-primary)',
    secondary: 'var(--ds-color-text-secondary)',
    tertiary: 'var(--ds-color-text-tertiary)',
    inverse: 'var(--ds-color-text-inverse)',
    disabled: 'var(--ds-color-text-disabled)',
  },

  border: {
    primary: 'var(--ds-color-border-primary)',
    secondary: 'var(--ds-color-border-secondary)',
    focus: 'var(--ds-color-border-focus)',
    error: 'var(--ds-color-border-error)',
    success: 'var(--ds-color-border-success)',
    warning: 'var(--ds-color-border-warning)',
  },

  interactive: {
    hover: 'var(--ds-color-interactive-hover)',
    active: 'var(--ds-color-interactive-active)',
    focus: 'var(--ds-color-interactive-focus)',
    disabled: 'var(--ds-color-interactive-disabled)',
  },

  accent: {
    primary: 'var(--ds-color-accent-primary)',
    secondary: 'var(--ds-color-accent-secondary)',
    highlight: 'var(--ds-color-accent-highlight)',
  },

  /* State Colors */
  state: {
    hover: {
      primary: 'var(--ds-color-state-hover-primary)',
      secondary: 'var(--ds-color-state-hover-secondary)',
      success: 'var(--ds-color-state-hover-success)',
      error: 'var(--ds-color-state-hover-error)',
    },
    active: {
      primary: 'var(--ds-color-state-active-primary)',
      secondary: 'var(--ds-color-state-active-secondary)',
      success: 'var(--ds-color-state-active-success)',
      error: 'var(--ds-color-state-active-error)',
    },
    focus: {
      outline: 'var(--ds-color-state-focus-outline)',
      background: 'var(--ds-color-state-focus-background)',
    },
    disabled: {
      background: 'var(--ds-color-state-disabled-background)',
      text: 'var(--ds-color-state-disabled-text)',
      border: 'var(--ds-color-state-disabled-border)',
    },
  },

  /* Surface Colors */
  surface: {
    light: 'var(--ds-color-surface-light)',
    dark: 'var(--ds-color-surface-dark)',
  },
} as const;

export type ColorToken = typeof dsColors;
export type ColorKey = keyof ColorToken;
