import React from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

export function useAuthentication() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
    });
  }, []);

  return {
    user,
  };
}
