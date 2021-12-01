import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "@firebase/auth";
import { auth } from "@/utils/Firebase/firebaseConfig";
import { LoginDiv } from "./styles";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputs;

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const signInButton = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user, "가 로그인 되었습니다");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const signOutButton = () => {
    signOut(auth)
      .then(() => {
        console.log("로그아웃 되었습니다");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <>
      <LoginDiv>
        <h2>로그인</h2>
        <div>
          <input
            name="email"
            type="email"
            placeholder="이메일 주소"
            required
            value={email}
            onChange={onChange}
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="비밀번호"
            required
            value={password}
            onChange={onChange}
          />
        </div>

        <div>
          <button onClick={signInButton}>로그인</button>
          <button onClick={signOutButton}>로그아웃</button>
        </div>
      </LoginDiv>
    </>
  );
};

export default Login;
