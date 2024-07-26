import { useSearchParams } from 'react-router-dom';

import { Button } from '#/components/ui/button';
import { ChevronLeftIcon } from '#/components/icons/chevron-left';
import { ChevronRightIcon } from '#/components/icons/chevron-right';

import { cn } from '#/lib/utils';

type PaginationProps = {
  className?: string;
  hasNextPage: boolean;
};

export const Pagination = ({ className, hasNextPage }: PaginationProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 0;

  const handlePageChange = (number: number) => {
    setSearchParams((prev) => {
      prev.set('page', String(currentPage + number));
      return prev;
    });
  };

  return (
    <nav
      role='navigation'
      aria-label='pagination'
      className={cn('mx-auto flex w-full justify-center', className)}
    >
      <ul className='flex flex-row items-center gap-2'>
        <Button
          variant='ghost'
          className='gap-1'
          aria-label='Go to previous page'
          disabled={!currentPage || currentPage === 1}
          onClick={() => handlePageChange(-1)}
        >
          <ChevronLeftIcon className='size-4' />
          <span>Previous</span>
        </Button>
        <Button
          variant='ghost'
          className='gap-1'
          aria-label='Go to next page'
          disabled={!hasNextPage}
          // by default page is 1 even if currentPage is not set,
          onClick={() => handlePageChange(currentPage ? 1 : 2)}
        >
          <span>Next</span>
          <ChevronRightIcon className='size-4' />
        </Button>
      </ul>
    </nav>
  );
};
