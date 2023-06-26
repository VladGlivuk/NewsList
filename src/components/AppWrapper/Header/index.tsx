import { FC } from 'react';
//hooks
import { useStoreState } from 'store/hooks';

const Header: FC = () => {
  const totalNews = useStoreState((store) => store.news.newsList.total);

  return (
    <div className='bg-blue-300 flex justify-center items-center gap-x-8 p-3'>
      <h1 className='text-4xl font-bold underline'>News List</h1>

      {totalNews && <span className='text-2xl font-medium'>Total News: {totalNews}</span>}
    </div>
  );
};

export default Header;
