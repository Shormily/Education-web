// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRIradS57EyjzWViB7z_TNUCC6OwpklN0",
  authDomain: "education-84a42.firebaseapp.com",
  projectId: "education-84a42",
  storageBucket: "education-84a42.appspot.com",
  messagingSenderId: "194910521708",
  appId: "1:194910521708:web:1e79b0fc2cefb0300d4b49"
};
console.log(firebaseConfig)
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app);
