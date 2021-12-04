import React, { useCallback, useState } from "react";
import {
  SignUpDiv,
  SignUpForm,
  TextDiv,
  UserFormInput,
  UserH2,
  UserSubmitInput,
} from "./styles";
import { useNavigate } from "react-router";
import { createUserWithEmailAndPassword, updateProfile } from "@firebase/auth";
import Swal from "sweetalert2";
import { auth } from "@/utils/Firebase/firebaseConfig";
import { useSelector } from "react-redux";
import { loginUser } from "@/utils/Toolkit/Slice/userSlice";

const userInfo = () => {
  const navigate = useNavigate();
  const UserDisplayName = useSelector(loginUser);
  // const userEmailValue = useSelector(userEmail);
  // console.log("info", userDisplayName);
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
      Swal.fire({
        icon: "error",
        text: "비밀번호가 일치하지 않습니다",
      });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: displayName,
          }).then(() => {
            navigate("/");
            Swal.fire({
              icon: "success",
              title: "회원가입이 성공하였습니다🥰",
              showConfirmButton: false,
              timer: 1500,
            });
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
          switch (errorCode) {
            case "auth/email-already-in-use":
              Swal.fire({
                icon: "warning",
                text: `이미 존재하는 메일 입니다`,
              });
              break;
            default:
              errorCode;
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
          <UserH2>내 정보</UserH2>
          <TextDiv>
            {/* <UserFormInput name="email" type="email"  value={email} /> */}
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

          <UserSubmitInput type="submit" value="수정" />
        </SignUpForm>
      </SignUpDiv>
    </>
  );
};

export default userInfo;
