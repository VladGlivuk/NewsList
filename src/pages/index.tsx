import { useEffect } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
//hooks
import { useStoreActions } from 'store/hooks';
//functions
import { fetchNewsList } from 'core/functions';
//types
import { NewsData } from 'core/types';

type HomePageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export const Home: NextPage<HomePageProps> = ({ newsList }) => {
  const addNews = useStoreActions((actions) => actions.news.addNewsItems);

  useEffect(() => {
    if (!!newsList?.total) addNews(newsList);
  }, []);

  return <div className='h-screen bg-gradient-to-b from-gray-100 to-gray-300'></div>;
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
