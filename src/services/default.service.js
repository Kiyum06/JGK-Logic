//place service code here...
import { getAllProducts } from "../model/default.repo.js";

export const fetchAllProducts = async () => {
    const products = await getAllProducts();
    return products;
}