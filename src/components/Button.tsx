'use client'

import { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
}

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm rounded-md',
  md: 'px-4 py-2 text-sm rounded-lg',
  lg: 'px-6 py-3 text-base rounded-xl',
}

const variantClasses = {
  primary: 'bg-primary text-primary-foreground hover:bg-accent transition-colors shadow-sm',
  secondary: 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors',
  ghost: 'bg-transparent text-muted-foreground hover:text-primary',
  destructive: 'bg-destructive text-white hover:bg-red-600',
}

export default function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-medium focus:outline-none focus-visible:ring-2 ring-ring ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
