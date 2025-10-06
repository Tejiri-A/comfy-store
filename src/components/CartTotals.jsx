import { useSelector } from "react-redux";
import { formatPrice } from "../utils/index.jsx";

const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );
  return (
    <div className="card bg-base-200">
      <div className="card-body">
        {/*  SUBTOTAL*/}
        <p className="border-base-300 flex justify-between border-b pb-2 text-xs">
          <span>Subtotal</span>
          <span className="font-medium">{formatPrice(cartTotal)}</span>
        </p>
        {/*  SHIPPING*/}
        <p className="border-base-300 flex justify-between border-b pb-2 text-xs">
          <span>Shipping</span>
          <span className="font-medium">{formatPrice(shipping)}</span>
        </p>
        {/*  TAX*/}
        <p className="border-base-300 flex justify-between border-b pb-2 text-xs">
          <span>Tax</span>
          <span className="font-medium">{formatPrice(tax)}</span>
        </p>
        {/*  ORDER TOTAL*/}
        <p className="flex justify-between pb-2 text-sm">
          <span>Order Total</span>
          <span className="font-medium">{formatPrice(orderTotal)}</span>
        </p>
      </div>
    </div>
  );
};
export default CartTotals;
