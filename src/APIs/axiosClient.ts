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
  getSearch: async (searchKey: string) => {
    return axios
      .get(`https://dummyjson.com/products/search?${searchKey}`)
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
  },

  deleteByID: async (id: number) => {
    try {
      const response = await axios.delete(
        `https://dummyjson.com/products/${id}`
      );
      const jsonData = response.data;
      return jsonData;
    } catch (err) {
      throw err;
    }
  },

  updateByID: async (id: number, payload: any) => {
    try {
      const response = await axios.put(`https://dummyjson.com/products/${id}`, {
        headers: { "Content-Type": "application/json" },
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
      const response = await axios.post("https://dummyjson.com/products/add", {
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const jsonData = response.data;
      return jsonData;
    } catch (err) {
      throw err;
    }
  },
  // getByID: async (params: string) => {
  //   try {
  //     const response = await axios.get(
  //       `https://dummyjson.com/products/${params}`
  //     );
  //     const jsonData = response.data;
  //     return jsonData;
  //   } catch (error) {
  //     throw error;
  //   }
  // },
};

export default axiosClient;
