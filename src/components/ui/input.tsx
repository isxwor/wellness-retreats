import { forwardRef, type InputHTMLAttributes } from 'react';

import { cn } from '#/lib/utils';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn('pl-12 pr-3 py-2 border rounded-md', className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
