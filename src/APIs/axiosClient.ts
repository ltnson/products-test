import axios from 'axios';

// const APP_URL = import.meta.env.VITE_REACT_APP_URL;
const APP_URL = 'https://dummyjson.com/products';

const axiosClient = {
  getLimit: async (limit: number, skip: number) => {
    try {
      const response = await axios.get(
        `${APP_URL}?limit=${limit}&skip=${skip}&select=title,description,stoct,category,price,discountPercentage,rating,band,thumbnail,images`,
      );
      const jsonData = response.data;
      return jsonData;
    } catch (error) {
      throw error;
    }
  },
  getSearch: async (searchKey: string) => {
    return axios
      .get(`${APP_URL}/search?${searchKey}`)
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
  },

  deleteByID: async (id: number) => {
    try {
      const response = await axios.delete(`${APP_URL}/${id}`);
      const jsonData = response.data;
      return jsonData;
    } catch (err) {
      throw err;
    }
  },

  updateByID: async (id: number, payload: any) => {
    try {
      const response = await axios.put(`${APP_URL}/${id}`, {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const jsonData = response.data;
      return jsonData;
    } catch (err) {
      throw err;
    }
  },
  addOne: async (payload: any) => {
    try {
      const response = await axios.post(`${APP_URL}/add`, {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const jsonData = response.data;
      return jsonData;
    } catch (err) {
      throw err;
    }
  },
};

export default axiosClient;
