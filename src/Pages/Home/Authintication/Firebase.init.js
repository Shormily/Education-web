// import { initializeApp } from "firebase/app";
// import firebaseConfig from "./firebaseconfig";

import { initializeApp } from "firebase/app";
import { firebaseConfig } from './firebaseconfig';

const inisilizeAuthentication = () =>{
    initializeApp(firebaseConfig)
    // initializeApp(firebaseConfig);
}

export default inisilizeAuthentication;