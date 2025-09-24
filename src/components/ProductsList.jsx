import { Link, useLoaderData } from "react-router";
import { formatPrice } from "../utils/index.jsx";

const ProductsList = () => {
  const { products } = useLoaderData();

  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((product) => {
        const { title, price, image, company } = product.attributes;
        const dollarsAmount = formatPrice(price);
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="bg-base-100 group flex flex-col flex-wrap gap-y-4 rounded-lg p-8 shadow-xl duration-300 hover:shadow-2xl sm:flex-row"
          >
            <img
              src={image}
              alt={title}
              className="size-24 rounded-lg object-cover transition duration-300 group-hover:scale-105 sm:size-32"
            />
            <div className="ml-0 sm:ml-16">
              <h3 className="text-lg font-medium capitalize">{title}</h3>
              <h4 className="text-lg font-medium capitalize">{company}</h4>
            </div>
            <p className="ml-0 text-lg font-medium sm:ml-auto">
              {dollarsAmount}
            </p>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsList;
