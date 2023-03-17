import {Method} from 'axios';
import {store} from './store';

export type RootState = ReturnType<typeof store.getState>;

export type actionType = {
  type: string;
  payload: any;
};

export type baseReducersType = {
  dataProduct: Array<dataProductType | undefined>;
  dataCategory: Array<dataCategoryType | undefined>;
};

export type dataCategoryType = {
  name: string;
  id: string;
};

export type resCategory = {
  status: number;
  data: Array<dataCategoryType>;
};

export type dataProductType = {
  description: string;
  id: string;
  image: string;
  isFav: boolean;
  name: string;
  new: boolean;
  off: string;
  out_of_stock: boolean;
  price: string;
  rating: number;
  reviewCount: number;
};

export type resProduct = {
  status: number;
  data: Array<dataProductType>;
};

export type requestType = {
  path: string;
  method: Method;
  headers?: object;
  query?: object;
  data?: object;
  timeout?: number;
  responseType?: string;
};
