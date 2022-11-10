import axios from "axios";
import callAPI from "../config/ApiCall";

const ROOT_API = process.env.NEXT_PUBLIC_API;

export const getNewProducts = async () => {
  const url = `${ROOT_API}/products?limit=5`;
  return callAPI({
    url,
    method: "GET",
  });
};

export const getProductsByCategory = async (category: string) => {
  const url = `${ROOT_API}/products/category/${category}`;
  return callAPI({
    url,
    method: "GET",
  });
};

export const getProductById = async (id: string) => {
  const url = `${ROOT_API}/products/${id}`;
  return callAPI({
    url,
    method: "GET",
  });
};

export const getAllProduct = async () => {
  const url = `${ROOT_API}/products`;
  return callAPI({
    url,
    method: "GET",
  });
};

export const doLogin = async (payload) => {
  const url = `${ROOT_API}/auth/login`;
  return callAPI({
    url,
    method: "POST",
    data: payload,
  });
};
