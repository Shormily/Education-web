import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut,
  } from "firebase/auth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import inisilizeAuthentication from "./Firebase.init";

inisilizeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider;




  const signInUsingGoogle = (location,navigate) => {
    // setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {

        const distination = location?.state?.from || '/about';
        console.log( distination);
        navigate(distination);

        Swal.fire(
          'Successfully Sign In!',
          'welcome to our Medical Clinic',
          'success'
        )
        setUser(result.user);
      })
      .catch((error) => {
      
        
        setError(error.message);
      });
  };
  const logout = () => {
    signOut(auth).then(() => {
      setUser({ user });
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("inside state change", user);
        setUser(user);
      }
    });
  });

  return {
    user,
    error,
    signInUsingGoogle,
    logout
   
  };
};

export default useFirebase;