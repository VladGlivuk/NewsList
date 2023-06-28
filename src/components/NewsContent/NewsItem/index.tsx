import { FC, MouseEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
//functions
import { getIsUrlImageValid } from 'core/functions';
//types
import { NewsItem } from 'core/types';
//constants
import { NEWS_PAGE, getNewsTitleQuery } from 'core/constants';

type NewsItemProps = { news: NewsItem };

const NewsItem: FC<NewsItemProps> = ({
  news: {
    title,
    source: { name },
    urlToImage,
    url,
  },
}) => {
  const router = useRouter();

  const isValidImageUrl = getIsUrlImageValid(urlToImage);

  const goToNewsItemPage = () => {
    const query = getNewsTitleQuery(router.query, title);
    router.push({ pathname: NEWS_PAGE, query });
  };

  const onLinkClickHandler = (event: MouseEvent<HTMLAnchorElement>) => event.stopPropagation();

  return (
    <div className='max-w-xs h-72 bg-sky-200 flex flex-col justify-center items-center p-4 cursor-pointer' onClick={goToNewsItemPage}>
      <span className='line-clamp-2 font-bold text-lg leading-6'>{title}</span>

      {urlToImage && isValidImageUrl && (
        <div className='flex justify-center items-center'>
          <Image src={urlToImage} alt={url} width={300} height={160} className='rounded-lg object-contain max-h-44' />
        </div>
      )}

      <Link href={url} passHref target='blank' onClick={onLinkClickHandler}>
        Source: {name}
      </Link>
    </div>
  );
};

export default NewsItem;
