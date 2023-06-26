import { AxiosResponse } from 'axios';
//API
import { API } from 'core/API';
//types
import { NewsData, NewsListResponse } from 'core/types';

export const fetchNewsList = async (): Promise<NewsData | null> => {
  try {
    const newsResponse: AxiosResponse<NewsListResponse> = await API.get(`top-headlines?country=ua`);

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
};
