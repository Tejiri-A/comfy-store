import { useRouteError } from "react-router";

const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);
  return <h4 className="text-4xl font-bold">There was an error...</h4>;
};
export default ErrorElement;
