import { customFetch, formatPrice } from "../utils/index.js";
import { Link, useLoaderData } from "react-router";

export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`);
  return { product: response.data.data };
};

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollarsAmount = formatPrice(price);

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`/products`}>Products</Link>
          </li>
        </ul>
      </div>
      {/*  PRODUCT*/}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/*  IMAGE*/}
        <img
          src={image}
          alt={title}
          className="size-96 rounded-lg object-cover lg:w-full"
        />
        {/*  PRODUCT*/}
        <div>
          <h1 className="text-3xl font-bold capitalize">{title}</h1>
          <h4 className="text-neutral-content mt-2 text-xl font-bold">
            {company}
          </h4>
          <p className="mt-3 text-xl">{dollarsAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;
