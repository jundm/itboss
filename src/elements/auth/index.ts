import { auth } from "@/utils/Firebase/firebaseConfig";
import { loginUid } from "@/utils/Toolkit/Slice/userSlice";
import { signOut } from "@firebase/auth";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { Navigate, Outlet } from "react-router-dom";

export const signOutButton = () => {
  signOut(auth)
    .then(() => {
      toast.success("로그아웃 완료😎");
    })
    .catch((error) => {
      // console.log("error", error);
    });
};
