import { formatPrice, generateAmountOptions } from "../utils/index.jsx";
import { useDispatch } from "react-redux";
import { editItem, removeItem } from "../features/cart/cartSlice.js";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const removeItemFromCart = () => {
    dispatch(removeItem({ cartID }));
  };
  const handleAmount = (e) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
  };
  const { cartID, title, price, image, amount, company, productColor } =
    cartItem;
  return (
    <article className="border-base-300 mb-12 flex flex-col flex-wrap gap-y-4 border-b pb-6 last:border-b-0 sm:flex-row">
      <img
        src={image}
        alt={title}
        className="size-24 rounded-lg object-cover sm:size-32"
      />
      <div className="sm:ml-16 sm:w-48">
        {/*TITLE*/}
        <h3 className="font-medium capitalize">{title}</h3>
        {/*COMPANY*/}
        <h4 className="text-neutral-content mt-2 text-sm capitalize">
          {company}
        </h4>
        {/*  COLOR*/}
        <p className="mt-4 flex items-center gap-x-2 text-sm capitalize">
          color:
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className="sm:ml-12">
        {/*  AMOUNT*/}
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text">Amount</span>
            <select
              name="amount"
              id="amount"
              className="select select-base select-bordered select-xs mt-2"
              value={amount}
              onChange={handleAmount}
            >
              {generateAmountOptions(amount + 5)}
            </select>
          </label>
        </div>
        {/*  REMOVE*/}
        <button
          type="button"
          className="link link-primart link-hover mt-2"
          onClick={removeItemFromCart}
        >
          Remove
        </button>
      </div>

      {/*  PRICE*/}
      <p className="font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  );
};
export default CartItem;
