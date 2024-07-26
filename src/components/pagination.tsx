import { cn } from '#/lib/utils';
import { ChevronLeftIcon } from '#/components/icons/chevron-left';
import { ChevronRightIcon } from '#/components/icons/chevron-right';

type PaginationProps = {
  className?: string;
};

export const Pagination = ({ className }: PaginationProps) => {
  return (
    <nav
      role='navigation'
      aria-label='pagination'
      className={cn('mx-auto flex w-full justify-center', className)}
    >
      <ul className='flex flex-row items-center gap-2'>
        <a
          href='?test=test'
          className='flex gap-1 items-center px-4 py-2 hover:bg-black/5 rounded-md'
          aria-label='Go to previous page'
        >
          <ChevronLeftIcon className='h-4 w-4' />
          <span>Previous</span>
        </a>
        <a
          href='?test=test'
          className='flex gap-1 items-center px-4 py-2 hover:bg-black/5 rounded-md'
          aria-label='Go to next page'
        >
          <span>Next</span>
          <ChevronRightIcon className='h-4 w-4' />
        </a>
      </ul>
    </nav>
  );
};
