import { api } from "./api";

export const ProductService = {
  findAll: async () => {
    try {
      const response = await api.get('/products');
      const products = response.data;

      return products;
    } catch (error) {
      throw error;
    }
  },
  findOne: async (id) => {
    try {
      const response = await api.get(`/products/${id}`);
      const product = response.data;

      return product;
    } catch (error) {
      throw error;
    }
  },
};
