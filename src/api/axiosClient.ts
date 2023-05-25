import axios from 'axios';

const APP_URL = import.meta.env.VITE_REACT_APP_URL;
const SEARCH_URL = import.meta.env.VITE_REACT_SEARCH_URL;
const UPDATE_URL = import.meta.env.VITE_REACT_UPDATE_URL;
const DELETE_URL = import.meta.env.VITE_REACT_DELETE_URL;
const ADD_URL = import.meta.env.VITE_REACT_ADD_URL;
const OPTION_PARAMS = import.meta.env.VITE_REACT_OPTION_PARAMS;

const axiosClient = {
  getLimit: async (limit: number, skip: number) => {
    try {
      const response = await axios.get(
        `${APP_URL}?limit=${limit}&skip=${skip}&select=${OPTION_PARAMS}`,
      );
      const jsonData = response.data;
      return jsonData;
    } catch (error) {
      throw error;
    }
  },
  getSearch: async (searchKey: string) => {
    return axios
      .get(`${SEARCH_URL}${searchKey}`)
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
  },

  deleteByID: async (id: number) => {
    try {
      const response = await axios.delete(`${DELETE_URL}${id}`);
      const jsonData = response.data;
      return jsonData;
    } catch (err) {
      throw err;
    }
  },

  updateByID: async (id: number, payload: any) => {
    try {
      const response = await axios.put(`${UPDATE_URL}${id}`, {
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
      const response = await axios.post(`${ADD_URL}`, {
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
