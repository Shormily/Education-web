import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../Home/Authintication/firebaseconfig";
import LoadingSpinner from "../Home/Dashboard/LoadingSpinner";


// import { auth } from "../firebase/firebase.config";

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({ children }) {
  const [user, loading] = useAuthState(auth);
  console.log(useAuthState)
  let location = useLocation();
  if (loading) {
    return <LoadingSpinner/>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}
