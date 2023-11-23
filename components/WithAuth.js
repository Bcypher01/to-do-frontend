import { useRouter } from "next/router";
import { useEffect } from "react";
import Cookies from "js-cookie";

export default function withAuth(Component) {
  return function ProtectedRoute({ ...props }) {
    const router = useRouter();

    useEffect(() => {
      const user = Cookies.get("token");
      const userIsAuthenticated = user ;
      if (!userIsAuthenticated) {
        router.push("/login");
      }
    }, []);

    return <Component {...props} />;
  };
}
