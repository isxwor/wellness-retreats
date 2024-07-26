import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Input } from '#/components/ui/input';
import { SearchIcon } from '#/components/icons/search';

import { useDebounce } from '#/hooks/use-debounce';
import { cn } from '#/lib/utils';

export const SearchBox = ({
  className,
  placeHolder,
}: {
  className?: string;
  placeHolder?: string;
}) => {
  const [, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm);

  useEffect(() => {
    setSearchParams((prev) => {
      prev.set('search', debouncedSearchTerm);
      return prev;
    });
  }, [debouncedSearchTerm, setSearchParams]);

  return (
    <div className={cn('relative', className)}>
      <div className='absolute flex items-center h-full px-3 text-muted-foreground'>
        <SearchIcon />
      </div>
      <Input
        placeholder={placeHolder}
        className='w-full'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};
