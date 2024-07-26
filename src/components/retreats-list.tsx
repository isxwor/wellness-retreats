import { RetreatCard } from '#/components/retreat-card';
import { Pagination } from '#/components/pagination';
import { useRetreats } from '#/providers/retreats';

import { cn } from '#/lib/utils';

type RetreatsProps = {
  className?: string;
};

export const RetreatsList = ({ className }: RetreatsProps) => {
  const { retreats, error, isLoading, hasNextPage } = useRetreats();

  if (isLoading) {
    return <p className={cn('text-center', className)}>Loading...</p>;
  }

  if (error) {
    return <p className={cn('text-center', className)}>Error: {error}</p>;
  }

  return (
    <>
      <div className={cn('grid gap-8 grid-cols-1 xl:grid-cols-2', className)}>
        {retreats ? (
          retreats.map(({ id, ...rest }) => (
            <RetreatCard
              key={id}
              id={id}
              {...rest}
            />
          ))
        ) : (
          <p className='text-center py-8'>No Retreats Found</p>
        )}
      </div>
      <Pagination
        className='pb-14'
        hasNextPage={hasNextPage}
      />
    </>
  );
};
