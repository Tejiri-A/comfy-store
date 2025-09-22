import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router";
const Register = () => {
  return (
    <section className="grid h-screen place-items-center">
      <Form
        method="post"
        className="card bg-base-100 flex w-96 flex-col gap-y-4 p-8 shadow-lg"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput type={"text"} label={"username"} name={"username"} />
        <FormInput type={"email"} label={"email"} name={"email"} />
        <FormInput type={"password"} label={"password"} name={"password"} />
        <div className="mt-4">
          <SubmitBtn text={"register"} />
        </div>
        <p className="text-center">
          Already a member?{" "}
          <Link
            to={"/login"}
            className="link link-hover link-primary ml-2 capitalize"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Register;
