/**
 * Polestar Design Tokens - TypeScript Definitions
 * Minimalist dark theme inspired by Polestar Mobile App UI
 */

export const polestarTokens = {
  /* Colors */
  colors: {
    neutral: {
      black: 'var(--color-neutral-black)',
      white: 'var(--color-neutral-white)',
      grey900: 'var(--color-neutral-grey-900)',
      grey800: 'var(--color-neutral-grey-800)',
      grey700: 'var(--color-neutral-grey-700)',
      grey600: 'var(--color-neutral-grey-600)',
      grey400: 'var(--color-neutral-grey-400)',
    },
    brand: {
      primary: 'var(--color-brand-primary)',
      primaryLight: 'var(--color-brand-primary-light)',
    },
    surface: {
      input: 'var(--color-surface-input)',
      active: 'var(--color-surface-active)',
    },
  },

  /* Typography */
  typography: {
    fontFamily: 'var(--font-family-base)',
    fontWeights: {
      light: 'var(--font-weight-light)',
      normal: 'var(--font-weight-normal)',
      medium: 'var(--font-weight-medium)',
      semibold: 'var(--font-weight-semibold)',
      bold: 'var(--font-weight-bold)',
    },
    fontSizes: {
      xs: 'var(--font-size-xs)',
      sm: 'var(--font-size-sm)',
      base: 'var(--font-size-base)',
      md: 'var(--font-size-md)',
      lg: 'var(--font-size-lg)',
      xl: 'var(--font-size-xl)',
      xxl: 'var(--font-size-xxl)',
      mega: 'var(--font-size-mega)',
    },
    lineHeights: {
      tight: 'var(--line-height-tight)',
      base: 'var(--line-height-base)',
      loose: 'var(--line-height-loose)',
    },
    letterSpacing: {
      tight: 'var(--letter-spacing-tight)',
      base: 'var(--letter-spacing-base)',
    },
  },

  /* Spacing */
  spacing: {
    xs: 'var(--spacing-xs)',
    sm: 'var(--spacing-sm)',
    md: 'var(--spacing-md)',
    lg: 'var(--spacing-lg)',
    xl: 'var(--spacing-xl)',
    xxl: 'var(--spacing-xxl)',
    huge: 'var(--spacing-huge)',
  },

  /* Borders */
  borders: {
    widths: {
      thin: 'var(--border-width-thin)',
      thick: 'var(--border-width-thick)',
    },
    radius: {
      none: 'var(--border-radius-none)',
      sm: 'var(--border-radius-sm)',
    },
  },

  /* Shadows */
  shadows: {
    none: 'var(--shadow-none)',
  },

  /* Component Tokens */
  theme: {
    bgBody: 'var(--theme-bg-body)',
    textPrimary: 'var(--theme-text-primary)',
    textSecondary: 'var(--theme-text-secondary)',
    textAccent: 'var(--theme-text-accent)',
  },

  buttons: {
    primary: {
      bg: 'var(--btn-primary-bg)',
      text: 'var(--btn-primary-text)',
    },
    link: {
      text: 'var(--btn-link-text)',
    },
    accent: {
      text: 'var(--btn-accent-text)',
    },
  },

  inputs: {
    bg: 'var(--input-bg)',
    text: 'var(--input-text)',
    label: 'var(--input-label)',
    border: 'var(--input-border)',
  },

  lists: {
    itemBorder: 'var(--list-item-border)',
    itemTextPrimary: 'var(--list-item-text-primary)',
    itemTextSecondary: 'var(--list-item-text-secondary)',
  },

  cards: {
    active: {
      bg: 'var(--card-bg-active)',
      text: 'var(--card-text-active)',
      icon: 'var(--card-icon-active)',
    },
    inactive: {
      bg: 'var(--card-bg-inactive)',
      textLabel: 'var(--card-text-inactive-label)',
      textStatus: 'var(--card-text-inactive-status)',
      icon: 'var(--card-icon-inactive)',
    },
  },

  navbar: {
    iconInactive: 'var(--navbar-icon-inactive)',
    iconActive: 'var(--navbar-icon-active)',
  },

  indicators: {
    bgTrack: 'var(--indicator-bg-track)',
    bgFill: 'var(--indicator-bg-fill)',
  },
} as const;

export type PolestarTokens = typeof polestarTokens;
