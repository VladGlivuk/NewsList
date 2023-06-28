import { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from 'react';
//functions
import { fetchNewsList } from 'core/functions';
//types
import { FETCH_NEWS_TYPE, FilterLanguage, FilterOption, NewsData, UseInfiniteScroll } from 'core/types';
//constants
import { EN, TITLE } from 'core/constants';

export const useInfiniteScroll = (
  news: NewsData | null,
  fetchType = FETCH_NEWS_TYPE.HEADLINES,
  page: number,
  setPage: Dispatch<SetStateAction<number>>,
  searchValue: string,
  filter: FilterOption = TITLE,
  filterLanguage: FilterLanguage = EN
): UseInfiniteScroll => {
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [dynamicNews, setDynamicNews] = useState<NewsData | null>(news);

  const loadMoreTimeout: NodeJS.Timeout = setTimeout(() => null, 500);

  const loadMoreTimeoutRef = useRef<NodeJS.Timeout>(loadMoreTimeout);
  const observerRef = useRef<IntersectionObserver>();

  useEffect(() => setIsEmpty(false), [searchValue, filter, filterLanguage]);

  const handleObserver = useCallback(
    (entries: Array<IntersectionObserverEntry>) => {
      const [target] = entries;
      if (target.isIntersecting) {
        setIsEmpty(false);
        setIsLoading(true);
        clearTimeout(loadMoreTimeoutRef.current);

        loadMoreTimeoutRef.current = setTimeout(() => {
          fetchNewsList(fetchType, searchValue, filter, filterLanguage, page + 1)
            .then((newsList) => {
              setPage(page + 1);

              if (!!newsList?.total) {
                setDynamicNews(newsList);
              } else setIsEmpty(true);
              setIsLoading(false);
            })
            .catch((error) => {
              console.log('error:', error);
              setIsLoading(false);
            });
        }, 500);
      }
    },
    [loadMoreTimeoutRef, setIsLoading, page, news, searchValue, filter, filterLanguage]
  );

  const loadMoreHandler = useCallback(
    (el: HTMLDivElement) => {
      if (isLoading || isEmpty) return;
      if (observerRef.current) observerRef.current.disconnect();

      const option: IntersectionObserverInit = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
      };
      observerRef.current = new IntersectionObserver(handleObserver, option);

      if (el) observerRef.current.observe(el);
    },
    [handleObserver, isLoading, searchValue, filter, filterLanguage]
  );

  return {
    isLoading,
    loadMoreHandler,
    dynamicNews,
  };
};
