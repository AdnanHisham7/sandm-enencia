import axios from "axios";
export const api = "http://sandm-backend.onrender.com";
const API_URL = "http://sandm-backend.onrender.com/api";

export const getCategoriesByBrand = async (brandName) => {
  const response = await axios.get(`${API_URL}/brands/${brandName}/categories`);
  return response.data;
};

export const getProductsByBrand = async (brandName, filters = {}) => {
  const params = new URLSearchParams(filters);
  const response = await axios.get(
    `${API_URL}/brands/${brandName}/products?${params.toString()}`
  );
  return response.data;
};

export const getProductById = async (productId) => {
  const response = await axios.get(`${API_URL}/products/${productId}`);
  return response.data;
};
