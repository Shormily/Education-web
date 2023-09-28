import { BsArrowUp } from "react-icons/bs";
import './App.css'
import ScrollToTop from "react-scroll-to-top";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Home/Dashboard/Dashboard";
import About from "./Pages/Home/About/About";
import History from "./Pages/Home/About/History/History";
import Administrator from "./Pages/Home/About/Administrator/Administrator";
import Cafetria from "./Pages/Home/About/Cafetria/Cafetria";
import OurTeacher from "./Pages/Home/About/OurTeacher/OurTeacher";
import Campus from "./Pages/Home/About/Campus/Campus";
import Naves from "./Pages/Home/Navbars/Naves";
import Table from "./Pages/Home/Acamedic/Cource/Table";
import Footer from './Pages/Home/Footer/Footer';
import Calendar from "./Pages/Home/Acamedic/Calendar";
function App() {

  return (
    <>
    <Naves/>
    <Routes>
   <Route path="/" element={<Home />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/about" element={  <About /> }/>
    <Route path="/history" element={  <History /> }/>
    <Route path="/administrator" element={<Administrator />} />
    <Route path="/cafetria" element={<Cafetria />} />
    <Route path="/ourTeacher" element={<OurTeacher />} />
    <Route path="/campus" element={<Campus />} />
    <Route path="/cource" element={<Table />} />
    <Route path="/calendar" element={<Calendar />} />
 </Routes>
 <Footer/>
 <ScrollToTop 
style={{
boxShadow: "none",
backgroundColor: "#002147",
borderRadius: "2%",
right: 50,
zIndex: 20,
}}
component={
<BsArrowUp
 style={{ fontSize: "30px", margin: "0 auto", color: "white" }}
/>
}
smooth
top={500} />


    </>
  )
}

export default App
