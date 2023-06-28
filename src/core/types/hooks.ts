//types
import { NewsData } from './news';

export interface UseInfiniteScroll {
  isLoading: boolean;
  loadMoreHandler: (el: HTMLDivElement) => void;
  dynamicNews: NewsData | null;
}
