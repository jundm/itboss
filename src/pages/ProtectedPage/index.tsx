import React from "react";
import { loginUid } from "@/utils/Toolkit/Slice/userSlice";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router";

export function RequireAuth() {
  let location = useLocation();
  let auth = useSelector(loginUid);
  let authUser = auth.payload.user.uid;
  console.log("pro", authUser);
  if (authUser === null) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return <Outlet />;
}
