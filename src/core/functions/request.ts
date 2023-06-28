import axios, { AxiosResponse } from 'axios';
//API
import { API } from 'core/API';
//functions
import { getFilterLanguageInitialValue } from './language';
//types
import { FETCH_NEWS_TYPE, FilterLanguage, FilterOption, NewsData, NewsItem, NewsListResponse } from 'core/types';
//constants
import { defaultFilterValue, defaultPageSize, EN, filters, TITLE } from 'core/constants';

export const fetchNewsList = async (
  fetchType = FETCH_NEWS_TYPE.HEADLINES,
  searchValue: string,
  filter: FilterOption = TITLE,
  filterLanguage: FilterLanguage = EN,
  page = 1,
  pageSize = defaultPageSize
): Promise<NewsData | null> => {
  try {
    const filterValue = getFilterValue(filter);

    const newsResponse: AxiosResponse<NewsListResponse> = await API.get(fetchType, {
      params: { language: filterLanguage, [filterValue]: searchValue, pageSize, page },
    });

    if (newsResponse) {
      const newsList: NewsData = {
        data: newsResponse.data.articles,
        total: newsResponse.data.totalResults,
      };

      return newsList;
    }

    return null;
  } catch (error) {
    console.log('error:', error);
    return null;
  }

  function getFilterValue(filter: FilterOption): string {
    const filterKey = Object.entries(filters).find(([_key, value]) => value === filter)?.[0]; // find key by filter value

    return filterKey ?? defaultFilterValue;
  }
};

export const fetchNewsItemByTitle = async (title: string): Promise<NewsItem | null> => {
  try {
    const newsResponse: AxiosResponse<NewsListResponse> = await API.get(`${FETCH_NEWS_TYPE.ALL}?${defaultFilterValue}=${title}`);

    if (newsResponse) {
      const [targetNews] = newsResponse.data.articles;

      return targetNews;
    }

    return null;
  } catch (error) {
    console.log('error:', error);
    return null;
  }
};

export const fetchInitialNewsList = async (): Promise<NewsData | null> => {
  try {
    const language = getFilterLanguageInitialValue();

    const newsResponse: AxiosResponse<NewsListResponse> = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}${FETCH_NEWS_TYPE.HEADLINES}`, {
      params: { language },
      headers: {
        ['x-api-key']: process.env.NEXT_PUBLIC_API_KEY,
      },
    });

    if (newsResponse) {
      const newsList: NewsData = {
        data: newsResponse.data.articles,
        total: newsResponse.data.totalResults,
      };

      return newsList;
    }

    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};
