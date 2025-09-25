import { Form, Link, useLoaderData } from "react-router";
import { FormInput } from "./index.js";
import FormSelect from "./FormSelect.jsx";
import FormRange from "./FormRange.jsx";
import FormCheckbox from "./FormCheckbox.jsx";

const Filters = () => {
  const { meta } = useLoaderData();
  return (
    <Form className="bg-base-200 grid gap-x-4 gap-y-8 rounded-md px-8 py-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {/*  SEARCH*/}
      <FormInput
        type={"search"}
        label={"search product"}
        name={"search"}
        size={"input-sm"}
      />
      {/*CATEGORIES*/}
      <FormSelect
        label={"select category"}
        name={"category"}
        list={meta.categories}
        size={"select-sm"}
      />
      {/*COMPANIES*/}
      <FormSelect
        label={"select company"}
        name={"company"}
        list={meta.companies}
        size={"select-sm"}
      />
      {/*ORDER*/}
      <FormSelect
        label={"sort by"}
        name={"order"}
        list={["a-z", "z-a", "high", "low"]}
        size={"select-sm"}
      />
      {/*PRICE*/}
      <FormRange label={"select price"} size={"range-sm"} />
      {/*SHIPPING*/}
      <FormCheckbox
        name={"shipping"}
        label={"free shipping"}
        size={"checkbox-sm"}
      />
      {/*  BUTTONS*/}
      <button type="submit" className="btn btn-primary btn-small capitalize">
        search
      </button>
      <Link to={`/products`} className="btn btn-accent btn-sm capitalize">
        reset
      </Link>
    </Form>
  );
};
export default Filters;
