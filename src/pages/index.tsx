import { useEffect, useState } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
//hooks
import { useStoreActions, useStoreState } from 'store/hooks';
import { useEffectNoFirstMount, useInfiniteScroll } from 'core/hooks';
//functions
import { fetchInitialNewsList, fetchNewsList, getIsLastPage, getSearchNewsFetchType } from 'core/functions';
//types
import { FETCH_NEWS_TYPE, NewsData } from 'core/types';
//components
import NewsContent from 'components/NewsContent';
import SearchPanel from 'components/SearchPanel';
import Loader from 'shared/components/Loader';

type HomePageProps = InferGetServerSidePropsType<typeof getServerSideProps>;

export const Home: NextPage<HomePageProps> = ({ fetchedNewsList }) => {
  const [page, setPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);

  const addNews = useStoreActions((actions) => actions.news.addNewsItems);

  const {
    newsList,
    newsList: { total, data },
  } = useStoreState((store) => store.news);
  const { searchValue, filterValue, filterLanguage } = useStoreState((store) => store.filters);

  useEffect(() => {
    console.log('file: index.tsx:18  fetchedNewsList:', fetchedNewsList);
    if (!total && !!fetchedNewsList?.total) addNews(fetchedNewsList);
  }, []);

  useEffect(() => setPage(1), [searchValue, filterValue, filterLanguage]);

  const { isLoading, loadMoreHandler, dynamicNews } = useInfiniteScroll(
    newsList,
    getSearchNewsFetchType(searchValue),
    page,
    setPage,
    searchValue,
    filterValue,
    filterLanguage
  );

  useEffectNoFirstMount(() => {
    addNews(dynamicNews);

    const isLastPage = getIsLastPage(data.length, dynamicNews?.total || total);
    setIsLastPage(isLastPage);
  }, [dynamicNews]);

  return (
    <div className='bg-gradient-to-b from-gray-100 to-gray-300'>
      <SearchPanel />

      <NewsContent />

      <Loader isLoading={isLoading} isLastPage={isLastPage} loadMoreHandler={loadMoreHandler} />
    </div>
  );
};

export default Home;

type GetServerSidePropsType = {
  fetchedNewsList: NewsData | null;
};

export const getServerSideProps: GetServerSideProps<GetServerSidePropsType> = async () => {
  const fetchedNewsList = await fetchInitialNewsList();

  return {
    props: { fetchedNewsList },
  };
};
