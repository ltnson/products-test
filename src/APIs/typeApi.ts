import axiosClient from './axiosClient';
import { DataProducts, DummyData, Product } from '../types/types';

const typeApi = {
  getLimit(limit: number, skip: number): Promise<DataProducts> {
    return axiosClient.getLimit(limit, skip);
  },
  getSearch(searchKey: string): Promise<DataProducts> {
    return axiosClient.getSearch(searchKey);
  },
  deleteByID(id: number): Promise<any> {
    return axiosClient.deleteByID(id);
  },
  updateByID(id: number, payload: Product): Promise<Product> {
    return axiosClient.updateByID(id, payload);
  },
  addOne(payload: DummyData): Promise<Product> {
    return axiosClient.addOne(payload);
  },
};

export default typeApi;
