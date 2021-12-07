import React from "react";
import { loginUid } from "@/utils/Toolkit/Slice/userSlice";
import { useSelector } from "react-redux";
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
