//types
import { FilterOption } from './filter';
//constants
import { EVERYTHING, TOP_HEADLINES } from 'core/constants';

export type NewsData = {
  data: Array<NewsItem>;
  total: number;
};

type Source = {
  id: string | null;
  name: string;
};

export type NewsItem = {
  source: Source;
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
};

export enum FETCH_NEWS_TYPE {
  HEADLINES = TOP_HEADLINES,
  ALL = EVERYTHING,
}

export type FetchSearchNewsPayload = {
  searchValue: string;
  filterValue: FilterOption;
};
