import React from "react";
import { loginUid } from "@/utils/Toolkit/Slice/userSlice";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

export function RequireAuth() {
  const Uid = useSelector(loginUid);
  const slug = Uid.payload.userReducer.uid;
  if (slug === undefined) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}
export function AlreadyAuth() {
  const Uid = useSelector(loginUid);
  const slug = Uid.payload.userReducer.uid;
  if (slug !== undefined) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
}
