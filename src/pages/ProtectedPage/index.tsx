import React from "react";
import { Navigate, Outlet, useLocation } from "react-router";

export function RequireAuth() {
  // let location = useLocation();
  let authUser = sessionStorage.getItem("UID");
  console.log("RequireAuth", authUser);
  if (authUser === "") {
    return <Navigate to="/login" />;
    // return <Navigate to="/login" state={{ from: location }} />;
  }
  console.log("RequireAuth move outlet");
  return <Outlet />;
}
export function AlreadyAuth() {
  let authUser = sessionStorage.getItem("UID");
  if (authUser !== "") {
    return <Navigate to="/" />;
  }
  return <Outlet />;
}
