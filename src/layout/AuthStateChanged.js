import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import useAuth from "@src/hook/auth";
import Loading from "@src/components/shared/atoms/Loading/Loading";

const AuthStateChanged = ({ children }) => {
  const { setUser } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return <Loading />;
  }
  return children;
};

export default AuthStateChanged;
