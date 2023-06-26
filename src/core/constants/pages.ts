import { NextParsedUrlQuery } from 'next/dist/server/request-meta';
import qs from 'qs';

export const HOME_PAGE = '/';
export const NOT_FOUND = '/404';

export const getNewsTitleQuery = (query: NextParsedUrlQuery, newsTitle: string): string => {
  const newQueryString = `${qs.stringify({ ...query, newsTitle })}`;

  return newQueryString;
};
