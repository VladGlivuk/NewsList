//types
import { NewsItem } from './news';
//constants
import { ERROR, OK } from 'core/constants';

type Status = typeof ERROR | typeof OK;

export type NewsListResponse = {
  status: Status;
  totalResults: number;
  articles: Array<NewsItem>;
};
