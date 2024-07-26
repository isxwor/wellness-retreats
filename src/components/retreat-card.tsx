import placeholderImage from '#/assets/hero.jpg';

import { Button } from '#/components/ui/button';

import { convertTimestampToDate } from '#/lib/utils';
import { RetreatItem } from '#/types';

export const RetreatCard = ({
  title,
  description,
  date,
  location,
  price,
  condition,
  tag,
  image,
}: RetreatItem) => (
  <div className='flex flex-col gap-4 sm:gap-6 rounded-xl border bg-card p-6 md:p-6 text-card-foreground shadow sm:flex-row'>
    <img
      src={image || placeholderImage}
      alt='card image'
      className='aspect-video w-full rounded-lg object-cover sm:aspect-square sm:w-60'
    />
    <div className='flex gap-4 flex-col w-full'>
      <div className='space-y-2'>
        <h3 className='text-2xl font-semibold tracking-tight'>{title}</h3>
        <p className='text-sm text-muted-foreground'>{description}</p>
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <div className='space-y-1'>
          <p className='text-sm font-medium'>Date</p>
          <p className='text-muted-foreground text-sm'>
            {convertTimestampToDate(date)}
          </p>
        </div>
        <div className='space-y-1'>
          <p className='text-sm font-medium'>Location</p>
          <p className='text-muted-foreground text-sm'>{location}</p>
        </div>
        <div className='space-y-1'>
          <p className='text-sm font-medium'>Price</p>
          <p className='text-muted-foreground text-sm'>₹{price}</p>
        </div>
        <div className='space-y-1'>
          <p className='text-sm font-medium'>Condition</p>
          <p className='text-muted-foreground text-sm'>{condition} </p>
        </div>
      </div>

      <div className='space-y-1'>
        <p className='text-sm font-medium'>Tags</p>
        <div className='flex flex-wrap gap-2'>
          {tag.map((val, index) => (
            <div
              key={index}
              className='rounded-full capitalize text-foreground border px-2.5 py-0.5 text-xs font-semibold'
            >
              {val}
            </div>
          ))}
        </div>
      </div>
      <Button className='w-full sm:w-auto sm:self-end mt-auto'>Book Now</Button>
    </div>
  </div>
);
