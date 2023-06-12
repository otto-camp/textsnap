import React from 'react';

type BadgeVariant = 'light' | 'filled' | 'outline' | 'dot' | 'gradient';

type BadgeProps = {
  color?: string;
  variant?: BadgeVariant;
  gradient?: string;
  size?: string;
  radius?: string;
  fullWidth?: boolean;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  children?: React.ReactNode;
};

function Badge({
  color = 'text-white',
  variant = 'light',
  gradient = '',
  size = 'md',
  radius = 'xl',
  fullWidth = false,
  leftSection,
  rightSection,
  children,
}: BadgeProps) {
  let badgeStyle = `inline-block px-2 py-1 rounded-md ${size}`;

  if (variant === 'light') {
    badgeStyle += ` ${color}`;
  } else if (variant === 'filled') {
    badgeStyle += ` ${color} bg-${color}`;
  } else if (variant === 'outline') {
    badgeStyle += ` ${color} border border-${color}`;
  } else if (variant === 'dot') {
    badgeStyle += ` ${color} ${radius} ${
      fullWidth ? 'w-full overflow-hidden' : ''
    }`;
  } else if (variant === 'gradient') {
    badgeStyle += ` ${gradient} ${radius}`;
  }

  return (
    <span className={badgeStyle}>
      {leftSection && <span className='mr-1'>{leftSection}</span>}
      {children}
      {rightSection && <span className='ml-1'>{rightSection}</span>}
    </span>
  );
}

export default Badge;
