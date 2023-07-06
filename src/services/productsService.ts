import axios from "axios";
import Product from "../interfaces/Product";

let api: string = `${process.env.REACT_APP_API}/products`;

export function getProducts() {
  return axios.get(api);
}

export function getProductById(id: number) {
  return axios.get(`${api}/${id}`);
}

export function addProduct(newProduct: Product) {
  return axios.post(api, newProduct);
}

export function updateProduct(updatedProduct: Product, id: number) {
  return axios.put(`${api}/${id}`, updatedProduct);
}

export function deleteProduct(id: number) {
  return axios.delete(`${api}/${id}`);
}
