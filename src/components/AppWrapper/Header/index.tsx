import { FC } from 'react';

const Header: FC = () => {
  return (
    <div className='bg-blue-300 flex justify-evenly items-center gap-2 p-3'>
      <h1 className='text-4xl font-bold underline'>News List</h1>
    </div>
  );
};

export default Header;
