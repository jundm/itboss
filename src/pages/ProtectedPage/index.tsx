import React from "react";
import { Navigate, Outlet, useLocation } from "react-router";

export function RequireAuth() {
  // let location = useLocation();
  const authUser = sessionStorage.getItem("UID");
  if (authUser === "") {
    return <Navigate to="/login" />;
    // return <Navigate to="/login" state={{ from: location }} />;
  }
  return <Outlet />;
}
export function AlreadyAuth() {
  const authUser = sessionStorage.getItem("UID");
  if (authUser !== "") {
    return <Navigate to="/" />;
  }
  return <Outlet />;
}
