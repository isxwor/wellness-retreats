import placeholderImage from '#/assets/hero.jpg';

export const RetreatCard = () => (
  <div className='flex flex-col gap-4 rounded-xl border bg-card p-4 text-card-foreground shadow sm:flex-row'>
    <img
      src={placeholderImage}
      alt='card image'
      className='aspect-video w-full rounded-lg object-cover sm:aspect-square sm:w-52'
    />
    <div className='flex-1 font-heading'>
      <h1 className='text-lg font-semibold'>Forest Yoga Retreat</h1>
      <div className='text-muted-foreground mb-4'>
        Join us for a rejuvenation yoga retreat in the heart of the forest.
        Experience tranquility and peace.
      </div>
      <div className='text-muted-foreground'>Date: June 10-15, 2024</div>
      <div className='text-muted-foreground'>Location: Redwood Forest, CA</div>
      <div className='text-muted-foreground'>Price: $1200</div>
    </div>
  </div>
);
