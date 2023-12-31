// import  { useContext } from 'react';

import { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';



const PrivateRoute = (children) => {
  
    const location = useLocation()
    
    if(loading){
        return
    }

    if(user){
        return children;
    }
    return<Navigate to="/login" state={{from:location}}  replace></Navigate> ;

};

export default PrivateRoute;