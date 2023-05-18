import axios from "axios";

const axiosClient = {
  getLimit: async (limit: number, skip: number) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,description,stoct,category,price,discountPercentage,rating,band,thumbnail,images`
      );
      const jsonData = response.data;
      return jsonData;
    } catch (error) {
      throw error;
    }
  },
  getByID: async (params: string) => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/${params}`
      );
      const jsonData = response.data;
      return jsonData;
    } catch (error) {
      throw error;
    }
  },
  getSearch: async (searchKey: string) => {
    return axios
      .get(`https://dummyjson.com/products/search?q=${searchKey}`)
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
  },

  deleteByID: async (id: number) => {
    return axios
      .delete(`https://dummyjson.com/products/${id}`, {
        method: "DELETE",
      })
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
  },

  updateByID: async (id: string, payload: any) => {
    return axios
      .put(`https://dummyjson.com/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
  },
};

export default axiosClient;
