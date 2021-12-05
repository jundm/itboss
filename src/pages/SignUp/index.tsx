import React, { useCallback, useState } from "react";
import {
  SignUpDiv,
  SignUpForm,
  TextDiv,
  UserFormInput,
  UserH2,
  UserSubmitInput,
} from "./styles";
import { createUserWithEmailAndPassword, updateProfile } from "@firebase/auth";
import { auth } from "@/utils/Firebase/firebaseConfig";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

interface SignUpProps {}

const SignUp = (setIsNickname: any) => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    setPassword: "",
    displayName: "",
  });
  const { email, password, setPassword, displayName } = inputs;

  const onChange = useCallback(
    (e: any) => {
      const { name, value } = e.target;
      if (name === "displayName") {
        setInputs({
          ...inputs,
          [name]: value.slice(0, 12),
        });
      } else {
        setInputs({
          ...inputs,
          [name]: value,
        });
      }
    },
    [inputs]
  );

  const Register = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (password !== setPassword) {
      toast.error("비밀번호가 일치하지 않습니다.", { icon: "👀" });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: displayName,
          }).then(() => {
            navigate("/");
            toast.success("회원가입이 성공하였습니다", { icon: "👏" });
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          switch (errorCode) {
            case "auth/email-already-in-use":
              toast.error("이미 존재하는 메일 입니다.", { icon: "😂" });
              break;
            default:
              toast.error(
                `${errorCode} 오류 메세지를 관리자에게 알려주세요! Email:bnmva23@hanmail.net`,
                { icon: "😂", duration: 10000 }
              );
          }
        });
    }
    setInputs({
      email: "",
      password: "",
      setPassword: "",
      displayName: "",
    });
  };

  return (
    <>
      <SignUpDiv>
        <SignUpForm onSubmit={Register}>
          <UserH2>회원가입</UserH2>
          <TextDiv>
            <UserFormInput
              name="email"
              type="email"
              placeholder="이메일"
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
          <TextDiv>
            <UserFormInput
              name="setPassword"
              type="Password"
              placeholder="비밀번호 확인"
              required
              value={setPassword}
              onChange={onChange}
            />
          </TextDiv>
          <TextDiv>
            <UserFormInput
              name="displayName"
              type="text"
              placeholder="닉네임(0-12자)"
              required
              value={displayName}
              onChange={onChange}
            />
          </TextDiv>

          <UserSubmitInput type="submit" value="회원가입" />
        </SignUpForm>
      </SignUpDiv>
    </>
  );
};

export default SignUp;
