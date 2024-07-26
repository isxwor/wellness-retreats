import heroImage from '#/assets/hero.jpg';

import { Button } from '#/components/ui/button';
import { SearchBox } from '#/components/search';
import { Filter } from '#/components/filter';
import { RetreatsList } from '#/components/retreats-list';

import { MapPinIcon } from '#/components/icons/map-pin';
import { TagIcon } from '#/components/icons/tag';

import { locationFilterOptions, tagFilterOptions } from '#/constants/filters';

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
          <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
            Discover Your Inner Peace
          </h1>
          <p className='leading-7 mt-4 lg:mt-5'>
            Join us for a series of wellness retreats designed to help you find
            tranquility and rejuvenation.
          </p>
          <Button className='mt-6'>Explore</Button>
        </div>
      </div>
    </div>
    <div className='container pt-14 flex gap-4 justify-between flex-col md:flex-row'>
      <div className='contents sm:flex gap-4'>
        <Filter
          icon={<MapPinIcon className='size-4' />}
          label='Filter location'
          filterKey='location'
          options={locationFilterOptions.map((loc) => ({
            label: loc,
            value: loc,
          }))}
        />
        <Filter
          icon={<TagIcon className='size-4' />}
          label='Filter tag'
          filterKey='filter'
          options={tagFilterOptions.map((tag) => ({
            label: tag,
            value: tag,
          }))}
        />
      </div>
      <SearchBox
        className='w-full md:w-96'
        placeHolder='Search retreats by title...'
      />
    </div>
    <RetreatsList className='container py-14' />
  </>
);
