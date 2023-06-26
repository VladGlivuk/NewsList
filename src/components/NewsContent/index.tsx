import { FC } from 'react';
//hooks
import { useStoreState } from 'store/hooks';
//components
import NewsItem from './NewsItem';

const NewsContent: FC = () => {
  const allNews = useStoreState((store) => store.news.newsList);

  return (
    <div className='bg-blue-100 flex justify-center items-center flex-wrap gap-y-8 gap-x-4 p-3 max-h-full'>
      {allNews.data.map((news) => (
        <NewsItem news={news} key={news.url + news.source + news.title} />
      ))}
    </div>
  );
};

export default NewsContent;
