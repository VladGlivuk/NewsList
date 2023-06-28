import { Action, Thunk, action, thunk } from 'easy-peasy';
//functions
import { fetchNewsList, getSearchNewsFetchType } from 'core/functions';
//types
import { FetchSearchNewsPayload, NewsData } from 'core/types';
//constants
import { newsStateInitialValue } from 'core/constants';

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
    const { searchValue, filterValue, filterLanguage } = payload;

    const fetchNewsArguments = getSearchNewsFetchType(searchValue);

    const newNewsList = await fetchNewsList(fetchNewsArguments, searchValue, filterValue, filterLanguage);

    actions.setFilteredItems(newNewsList);
  }),
};

export default news;
