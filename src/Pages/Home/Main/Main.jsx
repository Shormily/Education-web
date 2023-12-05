import { Outlet } from "react-router-dom";
import Naves from "../Navbars/Naves";
import Footer from "../Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import { BsArrowUp } from 'react-icons/bs';

const Main = () => {
    return (
        <div className="">
           <Naves/> 
           <Outlet/>
           <Footer/>
           <ScrollToTop
        style={{
          boxShadow: "none",
          backgroundColor: "#fff",
          borderRadius: "2%",
          right: 50,
          zIndex: 20,
        }}
        component={
          <BsArrowUp
            style={{ fontSize: "30px", margin: "0 auto", color: "#000" }}
          />
        }
        smooth
        top={500}
      />
        </div>
    );
};

export default Main;