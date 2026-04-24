import React from 'react';
import './TextButton.css';

/**
 * TextButton Component
 * A text-only/link-style button for tertiary actions
 * 
 * @category Atoms
 * @example
 * <TextButton variant="primary">
 *   Learn More
 * </TextButton>
 */

interface TextButtonProps {
  /** Button content/label */
  children: React.ReactNode;
  /** Color variant of the text button */
  variant?: 'primary' | 'secondary' | 'muted';
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
 * TextButton - A semantic text-only/link button component
 * Follows BEM naming convention and Polestar design tokens
 */
export const TextButton: React.FC<TextButtonProps> = ({
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
    'text-button',
    `text-button--${variant}`,
    `text-button--${size}`,
    disabled && 'text-button--disabled',
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
      <span className="text-button__text">{children}</span>
    </button>
  );
};

export default TextButton;
