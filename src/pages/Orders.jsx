import { redirect, useLoaderData } from "react-router";
import { toast } from "react-toastify";
import { customFetch } from "../utils/index.jsx";
import {
  OrdersList,
  PaginationContainer,
  SectionTitle,
} from "../components/index.js";

export const loader =
  (store) =>
  async ({ request }) => {
    const user = store.getState().userState.user;
    if (!user) {
      toast.warn("You must be logged in to view your orders.");
      return redirect(`/login`);
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    try {
      const response = await customFetch("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      console.error(error);
      const errorMessage =
        error?.response?.data?.error?.message ||
        "there was an error fetching your orders";
      toast.error(errorMessage);
      if (error.response.status === 401 || 403) return redirect("/login");
      return null;
    }
  };

const Orders = () => {
  const { meta } = useLoaderData();
  if (meta.pagination.total < 1)
    return <SectionTitle text={"please make an order"} />;
  return (
    <>
      <SectionTitle />
      <OrdersList />
      <PaginationContainer />
    </>
  );
};
export default Orders;
