import { FC, ReactNode } from 'react';
//easy-peasy
import { StoreProvider, createStore } from 'easy-peasy';
//models
import news, { NewsModel } from './NewsModel';

export interface StoreModel {
  news: NewsModel;
}

const model: StoreModel = {
  news,
};

export const store = createStore(model);

type ProviderProps = {
  children: ReactNode;
};

export const Provider: FC<ProviderProps> = ({ children }) => <StoreProvider store={store}>{children}</StoreProvider>;

export default model;
