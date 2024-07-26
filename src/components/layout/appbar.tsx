import { Link } from 'react-router-dom';

export const Appbar = () => (
  <header className='sticky top-0 border-b z-10 bg-white py-4'>
    <div className='container flex items-center justify-between'>
      <Link
        to='/'
        className='font-medium text-2xl text-black'
      >
        Wellness Retreats
      </Link>
    </div>
  </header>
);
