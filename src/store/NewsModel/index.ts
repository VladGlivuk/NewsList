import { Action, Thunk, action, thunk } from 'easy-peasy';
//types
import { FetchSearchNewsPayload, NewsData } from 'core/types';
//constants
import { fetchNewsList } from 'core/functions';
//constants
import { newsStateInitialValue } from 'core/constants';
//helpers
import { getSearchNewsFetchType } from './helpers';

export interface NewsModel {
  newsList: NewsData;
  addNewsItems: Action<NewsModel, NewsData | null>;
  setFilteredItems: Action<NewsModel, NewsData | null>;
  fetchSearchNews: Thunk<NewsModel, FetchSearchNewsPayload>;
}

const news: NewsModel = {
  newsList: newsStateInitialValue,

  addNewsItems: action((state, payload) => {
    if (payload) {
      const { data, total } = payload;

      state.newsList.data = [...state?.newsList?.data, ...data];
      state.newsList.total = total;
    }
  }),

  setFilteredItems: action((state, payload) => {
    if (payload) state.newsList = payload;
  }),

  fetchSearchNews: thunk(async (actions, payload) => {
    const { searchValue, filterValue } = payload;

    const fetchNewsArguments = getSearchNewsFetchType(searchValue);

    const newNewsList = await fetchNewsList(fetchNewsArguments, searchValue, filterValue);

    actions.setFilteredItems(newNewsList);
  }),
};

export default news;
