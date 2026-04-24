import React from 'react';
import './OutlineButton.css';

/**
 * OutlineButton Component
 * A ghost/outline variant button for secondary actions
 * 
 * @category Atoms
 * @example
 * <OutlineButton variant="primary" size="medium">
 *   Cancel
 * </OutlineButton>
 */

interface OutlineButtonProps {
  /** Button content/label */
  children: React.ReactNode;
  /** Color variant of the outline button */
  variant?: 'primary' | 'secondary' | 'danger';
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
 * OutlineButton - A semantic outline/ghost button component
 * Follows BEM naming convention and Polestar design tokens
 */
export const OutlineButton: React.FC<OutlineButtonProps> = ({
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
    'outline-button',
    `outline-button--${variant}`,
    `outline-button--${size}`,
    disabled && 'outline-button--disabled',
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
      <span className="outline-button__text">{children}</span>
    </button>
  );
};

export default OutlineButton;
