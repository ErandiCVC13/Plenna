import Loading from "@src/components/shared/atoms/Loading/Loading";
import { useRouter } from "next/router";
import useAuth from "./auth";

export const withPublic = (Component) => {
  return function WithPublic() {
    const auth = useAuth();
    const router = useRouter();

    if (auth.user) {
      router.replace("/");
      return <Loading></Loading>;
    }
    return <Component auth={auth} />;
  };
};
export const withProtected = (Component) => {
  return function WithProtected() {
    const auth = useAuth();
    const router = useRouter();

    if (!auth.user) {
      router.replace("/login");
      return <Loading></Loading>;
    }
    return <Component auth={auth} />;
  };
};
