import { Link } from "react-router-dom";

export function SignIn() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-red-100 ">
      <div className="bg-white max-w-xs flex flex-col pt-5 pb-3 px-6 rounded-lg">
        <h1 className="text-3xl font-bold  text-center">Sign In</h1>
        <p className="font-normal opacity-50  text-center mt-2">
          Enter your credentials to create an account
        </p>
        <label htmlFor="email" className="font-medium mt-3">
          E-mail
        </label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="johnode@example.com"
          className="border-2 rounded-md px-2 py-1 mt-2 mb-3"
        />
        <label htmlFor="password" className="font-medium">
          Password
        </label>
        <input
          type="text"
          name="password"
          id="password"
          placeholder="********"
          className="border-2 rounded-md px-2 py-1 mt-2 mb-3"
        />
        <button className="border rounded-md px-2 py-1 mb-3 bg-black text-white hover:bg-white hover:text-black">
          Sign Up
        </button>
        <p className="text-center">
          Don&apos;t have an account?{" "}
          <Link to="signup" className="underline">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}
