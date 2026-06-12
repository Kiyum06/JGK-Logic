//place service code here...
import { getAllProducts, getFilteredProducts, getProductById } from "../model/default.repo.js";

export const fetchAllProducts = async () => {
    const products = await getAllProducts();
    return products;
};

export const fetchFilteredProducts = async (category, minPrice) => {
    const products = await getFilteredProducts(category, minPrice);
    return products;

};
 
export const fetchProductById = async (id) => {
    const product = await getProductById(id);
    return product;
};