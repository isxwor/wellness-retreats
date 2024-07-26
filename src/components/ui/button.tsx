import { type ButtonHTMLAttributes } from 'react';

import { cn } from '#/lib/utils';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ className, ...rest }: ButtonProps) => (
  <button
    className={cn(
      'h-10 px-4 py-2 bg-black text-white hover:bg-black/90 rounded-md',
      className
    )}
    {...rest}
  />
);
