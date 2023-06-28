import { NextParsedUrlQuery } from 'next/dist/server/request-meta';
import qs from 'qs';

export const defaultPageSize = 20;

export const HOME_PAGE = '/';
export const NEWS_PAGE = '/news';
export const NOT_FOUND = '/404';

export const getNewsTitleQuery = (query: NextParsedUrlQuery, newsTitle: string): string => {
  const newQueryString = `${qs.stringify({ ...query, newsTitle })}`;

  return newQueryString;
};
