import "./Timebar.css"

const Timebar = () => {
    return (
        <div className="timebar ">
           <div className="mains">
            <h3 className="head">Responsive Timeline</h3>
            <div className="containerd">
                <ul className="uls">
                    <li>
                        <h3 className="heading">FrontEnd Developer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit excepturi accusamus minus
                        totam </p>
                        <a href="#">Read More </a>
                        <span className="date">January 2021</span>
                        <span className="circle"></span>
                    </li>
                    <li>
                        <h3 className="heading">BackEnd Developer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit excepturi accusamus minus
                        totam </p>
                        <a href="#">Read More </a>
                        <span className="date">February 2021</span>
                        <span className="circle"></span>
                    </li>
                    <li>
                        <h3 className="heading">Full Stack Developer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit excepturi accusamus minus
                        totam </p>
                        <a href="#">Read More </a>
                        <span className="date">March 2021</span>
                        <span className="circle"></span>
                    </li>
                    <li>
                        <h3 className="heading">App Developer</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit excepturi accusamus minus
                        totam </p>
                        <a href="#">Read More </a>
                        <span className="date">April 2021</span>
                        <span className="circle"></span>
                    </li>
                </ul>
            </div>
        </div>  
        </div>
    );
};

export default Timebar;