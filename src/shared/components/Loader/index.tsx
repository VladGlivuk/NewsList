import { FC } from 'react';
//types
import { UseInfiniteScroll } from 'core/types';

type LoaderProps = Pick<UseInfiniteScroll, 'isLoading' | 'loadMoreHandler'> & { isLastPage: boolean };

const Loader: FC<LoaderProps> = ({ isLoading, isLastPage, loadMoreHandler }) => {
  if (isLoading) return <p className='text-center text-base font-medium'>Loading...</p>;

  if (isLastPage) return;

  return <div ref={loadMoreHandler}></div>;
};

export default Loader;
