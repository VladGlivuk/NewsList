import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
//hooks
import { useStoreState } from 'store/hooks';
//functions
import { fetchNewsItemByTitle, getFormattedDate, getIsUrlImageValid } from 'core/functions';
//types
import { NewsItem } from 'core/types';
//constants
import { NOT_FOUND } from 'core/constants';

const NewsItemDetails: FC = () => {
  const router = useRouter();
  const { newsTitle } = router.query;

  const [currentNews, setCurrentNews] = useState<NewsItem | null>(null);

  const newsList = useStoreState((state) => state.news.newsList);

  useEffect(() => {
    if (!currentNews) {
      const existedNews = newsList.data.find((news) => news.url === newsTitle?.toString());

      if (existedNews) setCurrentNews(existedNews);
      else if (newsTitle)
        (async () => {
          const targetNews = await fetchNewsItemByTitle(newsTitle as string);

          if (targetNews) setCurrentNews(targetNews);
          else router.push(NOT_FOUND);
        })();
    }

    return () => setCurrentNews(null);
  }, [newsTitle]);

  if (!currentNews) return;

  const {
    title,
    urlToImage,
    url,
    description,
    author,
    source: { name },
    publishedAt,
  } = currentNews;

  const date = getFormattedDate(publishedAt);
  const isValidImageUrl = getIsUrlImageValid(urlToImage);

  return (
    <div className='max-h-max h-max bg-sky-200 flex flex-col justify-center items-center p-4'>
      <div className='flex justify-center items-center flex-col gap-y-10'>
        <span className='font-bold text-xl leading-6'>{title}</span>

        <span>{description}</span>

        <div className='flex justify-evenly w-max gap-x-4'>
          {author && (
            <>
              Created By: <span className='font-bold'> {author}</span>
            </>
          )}

          {date && (
            <>
              Date: <span className='font-bold'>{date}</span>
            </>
          )}
        </div>
      </div>

      {urlToImage && isValidImageUrl && (
        <div className='flex justify-center items-center'>
          <Image src={urlToImage} alt={url} width={260} height={78} />
        </div>
      )}

      <Link href={url} passHref target='blank'>
        Source: {name}
      </Link>
    </div>
  );
};

export default NewsItemDetails;
