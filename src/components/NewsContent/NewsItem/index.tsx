import { FC, MouseEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
//types
import { NewsItem } from 'core/types';
//constants
import { getNewsTitleQuery } from 'core/constants';
//functions
import { getIsUrlImageValid } from 'core/functions';

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
    router.push({ pathname: '/news', query });
  };

  const onLinkClickHandler = (event: MouseEvent<HTMLAnchorElement>) => event.stopPropagation();

  return (
    <div className='max-w-xs h-72 bg-sky-200 flex flex-col justify-center items-center p-4 cursor-pointer' onClick={goToNewsItemPage}>
      <span className='line-clamp-2 font-bold text-lg leading-6'>{title}</span>

      {urlToImage && isValidImageUrl && (
        <div className='flex justify-center items-center'>
          <Image src={urlToImage} alt={url} width={276} height={190} className='rounded-lg' />
        </div>
      )}

      <Link href={url} passHref target='blank' onClick={onLinkClickHandler}>
        Source: {name}
      </Link>
    </div>
  );
};

export default NewsItem;
