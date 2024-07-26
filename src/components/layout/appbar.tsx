import { Link } from 'react-router-dom';

export const Appbar = () => (
  <header className='sticky top-0 border-b z-10 bg-white py-4'>
    <div className='container flex items-center justify-between'>
      <Link
        to='/'
        className='text-2xl font-medium tracking-tight text-black'
      >
        Wellness Retreats
      </Link>
    </div>
  </header>
);
