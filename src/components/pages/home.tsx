import heroImage from '#/assets/hero.jpg';

import { Button } from '#/components/ui/button';
import { SearchBox } from '#/components/search';
import { RetreatCard } from '#/components/retreat-card';
import { Filter } from '#/components/filter';
import { Pagination } from '../pagination';

export const Home = () => (
  <>
    <div className='relative h-[620px] w-full'>
      <img
        src={heroImage}
        alt='hero image'
        className='absolute h-full w-full -z-10 object-cover'
      />
      <div className='container relative flex h-full items-end py-8 md:py-16'>
        <div className='max-w-[566px] rounded-2xl bg-white p-10'>
          <h1 className='font-heading text-5xl font-bold'>
            Discover Your Inner Peace
          </h1>
          <p className='mt-2 font-heading text-gray-800'>
            Join us for a series of wellness retreats designed to help you find
            tranquility and rejuvenation.
          </p>
          <Button className='mt-6'>Explore</Button>
        </div>
      </div>
    </div>
    <div className='container pt-14'>
      <div className='flex gap-4 justify-between flex-col md:flex-row'>
        <div className='contents sm:flex gap-4'>
          <Filter
            name='Filter'
            options={[
              { label: 'Yoga', value: 'yoga' },
              { label: 'Meditation', value: 'meditation' },
            ]}
          />
          <Filter
            name='Filter'
            options={[
              { label: 'Yoga', value: 'yoga' },
              { label: 'Meditation', value: 'meditation' },
            ]}
          />
        </div>
        <SearchBox
          className='w-full md:w-96'
          placeHolder='Search retreats by title...'
        />
      </div>
    </div>
    <div className='container py-14 grid gap-8 grid-cols-1 lg:grid-cols-2'>
      <RetreatCard />
      <RetreatCard />
    </div>
    <Pagination className='pb-14' />
  </>
);
