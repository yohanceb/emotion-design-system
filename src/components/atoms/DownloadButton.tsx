import React from 'react';
import './DownloadButton.css';

/**
 * DownloadButton Component
 * An atomic button component for download actions
 * 
 * @category Atoms
 * @example
 * <DownloadButton 
 *   href="/file.pdf"
 *   fileName="document.pdf"
 *   variant="primary"
 *   size="medium"
 * />
 */

interface DownloadButtonProps {
  /** URL or file path to download */
  href: string;
  /** File name for the downloaded file */
  fileName: string;
  /** Visual variant of the button */
  variant?: 'primary' | 'secondary' | 'accent';
  /** Size of the button */
  size?: 'small' | 'medium' | 'large';
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Additional CSS classes (BEM modifiers) */
  className?: string;
  /** Click handler callback */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Accessible label for screen readers */
  ariaLabel?: string;
  /** Additional attributes */
  [key: string]: any;
}

/**
 * DownloadButton - A semantic HTML button component for file downloads
 * Follows BEM naming convention and design system patterns
 */
export const DownloadButton: React.FC<DownloadButtonProps> = ({
  href,
  fileName,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className = '',
  onClick,
  ariaLabel,
  ...rest
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    }

    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const buttonClasses = [
    'download-button',
    `download-button--${variant}`,
    `download-button--${size}`,
    disabled && 'download-button--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={handleClick}
      aria-label={ariaLabel || `Download ${fileName}`}
      type="button"
      {...rest}
    >
      <span className="download-button__icon" aria-hidden="true">
        ⬇️
      </span>
      <span className="download-button__text">Download</span>
    </button>
  );
};

export default DownloadButton;
