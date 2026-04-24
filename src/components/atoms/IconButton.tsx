import React from 'react';
import './IconButton.css';

/**
 * IconButton Component
 * An icon-only button for compact UI interactions
 * 
 * @category Atoms
 * @example
 * <IconButton 
 *   icon="⚙️"
 *   ariaLabel="Settings"
 *   variant="primary"
 * />
 */

interface IconButtonProps {
  /** Icon content (emoji or SVG) */
  icon: React.ReactNode;
  /** Accessible label (required for icon-only buttons) */
  ariaLabel: string;
  /** Visual variant of the button */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** Size of the button */
  size?: 'small' | 'medium' | 'large';
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Button type attribute */
  type?: 'button' | 'submit' | 'reset';
  /** Click handler callback */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Additional CSS classes (BEM modifiers) */
  className?: string;
  /** Additional attributes */
  [key: string]: any;
}

/**
 * IconButton - A semantic icon-only button component
 * Follows BEM naming convention and Polestar design tokens
 * IMPORTANT: ariaLabel is required for accessibility
 */
export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  ariaLabel,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  type = 'button',
  onClick,
  className = '',
  ...rest
}) => {
  const buttonClasses = [
    'icon-button',
    `icon-button--${variant}`,
    `icon-button--${size}`,
    disabled && 'icon-button--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      {...rest}
    >
      <span className="icon-button__icon" aria-hidden="true">
        {icon}
      </span>
    </button>
  );
};

export default IconButton;
