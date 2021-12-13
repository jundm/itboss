import React, { useState } from "react";
import { signInWithEmailAndPassword, signOut } from "@firebase/auth";
import { auth } from "@/utils/Firebase/firebaseConfig";
import {
  LoginDiv,
  LoginForm,
  TextDiv,
  UserFormInput,
  UserSubmitInput,
} from "./styles";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

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
        toast.success("로그인 되었습니다🥰");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        switch (errorCode) {
          case "auth/user-not-found":
            toast.error("유저를 찾을 수 없습니다", { icon: "😂" });
            break;
          case "auth/wrong-password":
            toast.error("비밀번호가 잘못되었습니다", { icon: "😂" });
            break;
          case "auth/too-many-requests":
            toast.error("요청을 너무 많이 보냈습니다", { icon: "😂" });
            break;
          default:
            errorCode;
        }
      });
    setInputs({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <LoginDiv>
        <LoginForm onSubmit={SignInButton}>
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
