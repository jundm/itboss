import React, { useState } from "react";
import { signInWithEmailAndPassword, signOut } from "@firebase/auth";
import { auth } from "@/utils/Firebase/firebaseConfig";
import {
  LoginDiv,
  LoginError,
  LoginForm,
  TextDiv,
  UserFormInput,
  UserH2,
  UserSubmitInput,
} from "./styles";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
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

  const SignInButton = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
        Swal.fire({
          icon: "success",
          title: "로그인 되었습니다🥰",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        switch (errorCode) {
          case "auth/user-not-found":
            Swal.fire({
              icon: "error",
              text: `유저를 찾을 수 없습니다`,
            });
            break;
          case "auth/wrong-password":
            Swal.fire({
              icon: "error",
              text: `비밀번호가 잘못되었습니다`,
            });
            break;
          case "auth/too-many-requests":
            Swal.fire({
              icon: "error",
              text: `요청을 너무 많이 보냈습니다`,
            });
            break;
          default:
            errorCode;
        }
      });
  };

  return (
    <>
      <LoginDiv>
        <LoginForm onSubmit={SignInButton}>
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

          <UserSubmitInput type="submit" value="로그인" />
        </LoginForm>
      </LoginDiv>
    </>
  );
};

export default Login;
