import React from 'react';
import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  color?: string;
  type?: 'button' | 'submit' | 'reset';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  radius?: string;
  uppercase?: boolean;
  compact?: boolean;
  loading?: boolean;
  loaderPosition?: 'left' | 'right';
  loaderProps?: object;
  gradient?: string;
  classNames?: string;
  unstyled?: boolean;
}

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  {
    variant = 'primary',
    size = 'medium',
    type = 'button',
    disabled,
    children,
    leftIcon,
    rightIcon,
    fullWidth,
    radius = 'rounded-lg',
    compact,
    loading,
    loaderPosition,
    loaderProps,
    classNames,
    ...others
  },
  ref
) => {
  const buttonVariant =
    variant === 'secondary' ? 'bg-secondary-100' : 'bg-primary-100';
  const buttonSize =
    size === 'small'
      ? 'px-4 py-2 text-sm'
      : size === 'large'
      ? 'px-6 py-3 text-lg'
      : 'px-5 py-3 text-base';

  return (
    <button
      {...others}
      type={type}
      disabled={disabled || loading}
      className={twMerge(
        'inline-block',
        fullWidth && 'w-full',
        radius,
        'transition-all duration-200 focus:outline-none',
        buttonVariant,
        buttonSize,
        compact ? 'px-3 py-1' : '',
        classNames
      )}
      ref={ref}
    >
      {loading && loaderPosition === 'left' && (
        <span {...loaderProps}>Loading...</span>
      )}
      {leftIcon && <span>{leftIcon}</span>}
      {children}
      {rightIcon && <span>{rightIcon}</span>}
      {loading && loaderPosition === 'right' && (
        <span {...loaderProps}>Loading...</span>
      )}
    </button>
  );
};

export default React.forwardRef(Button);
