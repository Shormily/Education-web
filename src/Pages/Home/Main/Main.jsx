import { Outlet } from "react-router-dom";
import Naves from "../Navbars/Naves";
import Footer from "../Footer/Footer";


const Main = () => {
    return (
        <div className="">
           <Naves/> 
           <Outlet/>
           <Footer/>
        </div>
    );
};

export default Main;