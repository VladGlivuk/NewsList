import { AxiosResponse } from 'axios';
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { API } from 'core/API';
//types
import { NewsData, NewsListResponse } from 'core/types';

type HomePageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export const Home: NextPage<HomePageProps> = ({ newsList }) => {
  console.log('file: index.tsx:10  newsList:', newsList);
  return <div className='h-screen bg-gradient-to-b from-gray-100 to-gray-300'></div>;
};

export default Home;

type GetServerSidePropsType = {
  newsList: NewsData | null;
};

export const getServerSideProps: GetServerSideProps<GetServerSidePropsType> = async () => {
  const newsList = await fetchNewsList();
  console.log("file: index.tsx:22  newsList:", newsList)

  return {
    props: { newsList },
  };
};

const fetchNewsList = async (): Promise<NewsData | null> => {
  try {
    const newsResponse: AxiosResponse<NewsListResponse> = await API.get(`top-headlines?country=ua`);

    if (newsResponse) {
      const newsList: NewsData = {
        data: newsResponse.data.articles,
        total: newsResponse.data.totalResults,
      };

      return newsList;
    }
    return null;
  } catch (error) {
    console.log('error:', error);
    return null;
  }
};
