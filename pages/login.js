import React, { useState } from "react";
import { useRouter } from "next/router";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "axios";
import Link from "next/link";
import { Style } from "../components/Style.js";
import { LoginSchema } from "../components/Schema.js";
import Cookies from "js-cookie";

export default function Login() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        // same shape as initial values
        axios
          .post("https://todo-api-m08h.onrender.com/auth/login/", {
            email: values.email,
            password: values.password,
          })
          .then((response) => {
            let res = response.data;
            setLoading(false);
            router.push("/");
            const token = res.tokens?.access;
            token && Cookies.set("token", token, { expires: 7, secure: true });
            res.user && localStorage.setItem("user", JSON.stringify(res.user));
          })
          .catch(function (error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              setLoading(false);
              let err = error.response.data;
              setErrorMessage(err.message);
            }
          });
      }}>
      <Form>
        <div style={Style} className="h-screen">
          <div className="container mx-auto h-full flex justify-center content-center">
            <div className="sm:w-3/3 lg:w-1/3 mt-20">
              <h1 className="font-semibold text-white text-3xl mb-6 text-center">
                Login to our website
              </h1>
              <div className="p-8 bg-white mb-6 rounded-lg shadow-lg">
                <div className="px-5 pb-2">
                  {errorMessage ? (
                    <p className="text-xs font-semibold text-red-500">
                      {errorMessage}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mb-4">
                  <label className="font-semibold text-grey-600 block mb-2">
                    Email
                  </label>
                  <Field
                    name="email"
                    type="text"
                    className="block appearance-none w-full bg-white border outline-none hover:border-gray-400 focus:border-gray-400 px-2 py-2 rounded shadow"
                    placeholder="Your Email"
                  />
                  <ErrorMessage
                    name="email"
                    component="span"
                    className="text-sm font-semibold text-red-500"
                  />
                </div>

                <div className="mb-4">
                  <label className="font-semibold text-grey-600 block mb-2">
                    Password
                  </label>
                  <Field
                    name="password"
                    type="password"
                    className="block appearance-none w-full bg-white border outline-none hover:border-gray-400 focus:border-gray-400 px-2 py-2 rounded shadow"
                    placeholder="Your Password"
                  />
                  <ErrorMessage
                    name="password"
                    component="span"
                    className="text-sm font-semibold text-red-500"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className={`${
                      loading ? "bg-blue-200" : "bg-blue-400"
                    } hover:bg-blue-400 text-white font-bold py-2 px-4 rounded`}
                    onClick={() => setLoading(true)}>
                    {loading ? "Signing in..." : "Sign in"}
                  </button>

                  <Link
                    className="no-underline inline-block align-baseline font-semibold text-sm text-blue-400 hover:text-blue-600 float-right"
                    href="/">
                    Forgot Password?
                  </Link>
                </div>
                <div className="text-center mt-5">
                  <p className="text-grey-100 hover:text-black text-md">
                    Dont have an account? &nbsp;
                    <Link href="/sign-up" className="no-underline font-bold">
                      Create an Account
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
}
Login.getLayout = (page) => page;
