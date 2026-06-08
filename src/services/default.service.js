//place service code here...
import { getAllProducts, getFilteredProducts } from "../model/default.repo.js";

export const fetchAllProducts = async () => {
    const products = await getAllProducts();
    return products;
};

export const fetchFilteredProducts = async (category, minPrice) => {
    const products = await getFilteredProducts(category, minPrice);
    return products;

};
 