import { auth } from "@/utils/Firebase/firebaseConfig";
import { signInWithEmailAndPassword, signOut } from "@firebase/auth";
import Swal from "sweetalert2";

export const signOutButton = () => {
  signOut(auth)
    .then(() => {
      Swal.fire({
        icon: "success",
        title: "로그아웃 완료😎",
        showConfirmButton: false,
        timer: 1500,
      });
    })
    .catch((error) => {
      // console.log("error", error);
    });
};
