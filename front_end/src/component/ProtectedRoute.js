import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route,Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, children}) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
   
  if(loading===false){
    if(!isAuthenticated){
      return(<Navigate to="/login"/>)
    }
    if(isAuthenticated && user.role ==="user"){
      return(<Navigate to="/login" />);
    }
    return children ? children : <Outlet />;
  }
};

export default ProtectedRoute;