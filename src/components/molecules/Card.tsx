import React from 'react';
import './Card.css';

/**
 * Card Component
 * A flexible container for displaying grouped content
 * 
 * @category Molecules
 * @example
 * <Card variant="default" interactive>
 *   <Card.Header>
 *     <Card.Title>Card Title</Card.Title>
 *   </Card.Header>
 *   <Card.Body>
 *     Card content goes here
 *   </Card.Body>
 *   <Card.Footer>
 *     <button>Action</button>
 *   </Card.Footer>
 * </Card>
 */

interface CardProps {
  /** Card content */
  children: React.ReactNode;
  /** Visual variant of the card */
  variant?: 'default' | 'highlighted' | 'elevated';
  /** Whether the card has interactive styling */
  interactive?: boolean;
  /** Whether the card is disabled */
  disabled?: boolean;
  /** Additional CSS classes (BEM modifiers) */
  className?: string;
  /** Click handler for interactive cards */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  /** Additional attributes */
  [key: string]: any;
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

interface CardTitleProps {
  children: React.ReactNode;
  level?: 'h2' | 'h3' | 'h4';
  className?: string;
  [key: string]: any;
}

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
  [key: string]: any;
}

/**
 * Card - A semantic card component for displaying grouped content
 * Follows BEM naming convention and Polestar design tokens
 */
const CardComponent: React.FC<CardProps> & {
  Header: React.FC<CardHeaderProps>;
  Title: React.FC<CardTitleProps>;
  Body: React.FC<CardBodyProps>;
  Footer: React.FC<CardFooterProps>;
  Image: React.FC<CardImageProps>;
} = ({
  children,
  variant = 'default',
  interactive = false,
  disabled = false,
  className = '',
  onClick,
  ...rest
}) => {
  const cardClasses = [
    'card',
    `card--${variant}`,
    interactive && 'card--interactive',
    disabled && 'card--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <article
      className={cardClasses}
      onClick={onClick}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      onKeyDown={
        interactive
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onClick?.(e as any);
              }
            }
          : undefined
      }
      {...rest}
    >
      {children}
    </article>
  );
};

/**
 * Card.Header - Header section of the card
 */
CardComponent.Header = ({ children, className = '', ...rest }: CardHeaderProps) => (
  <div className={`card__header ${className}`.trim()} {...rest}>
    {children}
  </div>
);

/**
 * Card.Title - Title element within card header
 */
CardComponent.Title = ({ children, level = 'h3', className = '', ...rest }: CardTitleProps) => {
  const Component = level;
  return (
    <Component className={`card__title ${className}`.trim()} {...rest}>
      {children}
    </Component>
  );
};

/**
 * Card.Body - Main content section of the card
 */
CardComponent.Body = ({ children, className = '', ...rest }: CardBodyProps) => (
  <div className={`card__body ${className}`.trim()} {...rest}>
    {children}
  </div>
);

/**
 * Card.Footer - Footer section of the card
 */
CardComponent.Footer = ({ children, className = '', ...rest }: CardFooterProps) => (
  <div className={`card__footer ${className}`.trim()} {...rest}>
    {children}
  </div>
);

/**
 * Card.Image - Image section of the card
 */
CardComponent.Image = ({ src, alt, className = '', ...rest }: CardImageProps) => (
  <img src={src} alt={alt} className={`card__image ${className}`.trim()} {...rest} />
);

export const Card = CardComponent;
export default Card;
