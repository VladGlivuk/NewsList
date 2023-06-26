import { useEffect } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
//hooks
import { useStoreActions, useStoreState } from 'store/hooks';
//functions
import { fetchNewsList } from 'core/functions';
//types
import { NewsData } from 'core/types';
//components
import NewsContent from 'components/NewsContent';
import SearchPanel from 'components/SearchPanel';

type HomePageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export const Home: NextPage<HomePageProps> = ({ newsList }) => {
  const addNews = useStoreActions((actions) => actions.news.addNewsItems);
  const totalNews = useStoreState((store) => store.news.newsList.total);

  useEffect(() => {
    if (!totalNews && !!newsList?.total) addNews(newsList);
  }, []);

  return (
    <div className='bg-gradient-to-b from-gray-100 to-gray-300'>
      <SearchPanel />
      <NewsContent />
    </div>
  );
};

export default Home;

type GetServerSidePropsType = {
  newsList: NewsData | null;
};

export const getServerSideProps: GetServerSideProps<GetServerSidePropsType> = async () => {
  const newsList = await fetchNewsList();

  return {
    props: { newsList },
  };
};
