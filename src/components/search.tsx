import { SearchIcon } from '#/components/icons/search';
import { Input } from '#/components/ui/input';

import { cn } from '#/lib/utils';

export const SearchBox = ({
  className,
  placeHolder,
}: {
  className?: string;
  placeHolder?: string;
}) => {
  return (
    <div className={cn('relative', className)}>
      <div className='absolute flex items-center h-full px-3 text-muted-foreground'>
        <SearchIcon />
      </div>
      <Input
        placeholder={placeHolder}
        className='w-full'
        // value=''
        // onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};
