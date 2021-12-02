import { auth } from "@/utils/Firebase/firebaseConfig";
import { signInWithEmailAndPassword, signOut } from "@firebase/auth";

export const signOutButton = () => {
  signOut(auth)
    .then(() => {
      console.log("로그아웃 되었습니다");
    })
    .catch((error) => {
      console.log("error", error);
    });
};
