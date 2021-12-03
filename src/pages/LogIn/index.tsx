import React, { useState } from "react";
import { signInWithEmailAndPassword, signOut } from "@firebase/auth";
import { auth } from "@/utils/Firebase/firebaseConfig";
import {
  LoginDiv,
  LoginForm,
  TextDiv,
  UserFormInput,
  UserH2,
  UserSubmitInput,
} from "./styles";

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

  function signInButton() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user, "가 로그인 되었습니다");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <>
      <LoginDiv>
        <LoginForm>
          <UserH2>로그인</UserH2>
          <TextDiv>
            <UserFormInput
              name="email"
              type="email"
              placeholder="이메일 주소"
              required
              value={email}
              onChange={onChange}
            />
          </TextDiv>
          <TextDiv>
            <UserFormInput
              name="password"
              type="password"
              placeholder="비밀번호"
              required
              value={password}
              onChange={onChange}
            />
          </TextDiv>

          <UserSubmitInput onClick={signInButton} value="로그인" />
        </LoginForm>
      </LoginDiv>
    </>
  );
};

export default Login;
