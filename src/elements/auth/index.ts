import { auth } from "@/utils/Firebase/firebaseConfig";
import { signOut } from "@firebase/auth";
import toast from "react-hot-toast";

export const signOutButton = () => {
  signOut(auth)
    .then(() => {
      toast.success("로그아웃 완료😎");
    })
    .catch((error) => {
      // console.log("error", error);
    });
};
