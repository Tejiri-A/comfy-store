import {
  Filters,
  PaginationContainer,
  ProductsContainer,
} from "../components/index.js";
import { customFetch } from "../utils/index.jsx";

const URL = "/products";
export const loader = async () => {
  const response = await customFetch(URL);
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta };
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};
export default Products;
