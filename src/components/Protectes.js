import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const Protected = ({Component}) =>{ 
  const navigate = useNavigate();
  const location = useLocation();
  // const {token}= useSelector((state)=>state.login)
  useEffect(() => {
    let token = localStorage.getItem("userToken");
    if(!token){ 
      navigate('/') 
    }
    // if(token){
    //     navigate('/identity')
    // }
  },[]);
  return (
    <div>
      <Component/> 
    </div>
  );
};
export default Protected;