import Nav from "./Nav";
import Header from "./Header";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";

const Layout = ({ children }) => {
  // let router = useRouter();
  useEffect(() => {
    let token = Cookies.get("token");

    axios
      .post("https://todo-api-m08h.onrender.com/auth/jwt/verify/", {
        token: token,
      })
      .catch((error) => {
        Cookies.remove("token");
      });
  }, []);

  return (
    <div className="container px-8 lg:px-32 mx-auto">
      <Header />

      <div className="flex">
        <div className="hidden lg:block lg:w-2.5/12">
          <Nav />
        </div>
        <main className="w-full lg:w-9/12 mb-4">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
