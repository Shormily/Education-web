import ScrollToTop from "react-scroll-to-top";
import { BsArrowUp } from 'react-icons/bs';


const App = () => {
  return (
    <>
      <div>
   
      
    
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
        top={500}
      />
  


      </div>
    </>
  );
};

export default App;