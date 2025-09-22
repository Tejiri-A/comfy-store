import { FormInput, SubmitBtn } from "../components/index.js";
import { Form, Link } from "react-router";

const Login = () => {
  return (
    <section className="grid h-screen place-items-center">
      <Form
        method="post"
        className="card bg-base-100 flex w-96 flex-col gap-y-4 p-8 shadow-lg"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type={"email"}
          label={"email"}
          name={"identifier"}
          defaultValue={"test@example.com"}
        />
        <FormInput
          type={"password"}
          label={"password"}
          name={"password"}
          defaultValue={"secret"}
        />
        <div className="mt-4">
          <SubmitBtn text={"login"} />
        </div>
        <button type="button" className="btn btn-secondary btn-block">
          guest user
        </button>
        <p className="text-center">
          Not a member yet?{" "}
          <Link
            to={"/register"}
            className="link link-hover link-primary ml-2 capitalize"
          >
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
