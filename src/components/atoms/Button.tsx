import React from 'react';
import './Button.css';

/**
 * Button Component
 * An atomic button component for user interactions
 * 
 * @category Atoms
 * @example
 * <Button variant="primary" size="medium">
 *   Click Me
 * </Button>
 */

interface ButtonProps {
  /** Button content/label */
  children: React.ReactNode;
  /** Visual variant of the button */
  variant?: 'primary' | 'secondary' | 'accent';
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
  /** Accessible label for screen readers */
  ariaLabel?: string;
  /** Additional attributes */
  [key: string]: any;
}

/**
 * Button - A semantic HTML button component
 * Follows BEM naming convention and Polestar design tokens
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  type = 'button',
  onClick,
  className = '',
  ariaLabel,
  ...rest
}) => {
  const buttonClasses = [
    'button',
    `button--${variant}`,
    `button--${size}`,
    disabled && 'button--disabled',
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
      <span className="button__text">{children}</span>
    </button>
  );
};

export default Button;
