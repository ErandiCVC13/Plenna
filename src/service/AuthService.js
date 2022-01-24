import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const AuthService = {
  loginWithGoogle: async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    try {
      const userAuth = await firebase.auth().signInWithPopup(provider);
      return {
        user: userAuth.user,
      };
    } catch (e) {
      return {
        error: e.message,
      };
    }
  },
  logout: async () => {
    await firebase.auth().signOut();
  },
};
