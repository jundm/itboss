import React, { useCallback, useState } from "react";
import {
  SignUpDiv,
  SignUpForm,
  TextDiv,
  UserFormInput,
  UserH2,
  UserSubmitInput,
} from "./styles";
import { updatePassword, updateProfile, User } from "@firebase/auth";
import Swal from "sweetalert2";
import { auth } from "@/utils/Firebase/firebaseConfig";
import { useSelector } from "react-redux";
import { loginEmail, loginUser } from "@/utils/Toolkit/Slice/userSlice";
import { useNavigate } from "react-router";

const userInfo = () => {
  const history = useNavigate();
  const user = auth.currentUser;
  const userEmail = useSelector(loginEmail);
  const userEmailValue = userEmail.payload.user.email;
  const userNickname = useSelector(loginUser);
  const userNicknameValue = userNickname.payload.user.user;

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    setPassword: "",
    displayName: `${userNicknameValue}`,
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
  const UserUpdate = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (password !== setPassword) {
      Swal.fire({
        icon: "error",
        text: "비밀번호가 일치하지 않습니다",
      });
    } else {
      if (user) {
        updateProfile(user, {
          displayName: displayName,
        })
          .then(() => {
            console.log("닉네임 수정완료");

            updatePassword(user, password)
              .then(() => {
                console.log("비밀번호 수정완료");

                Swal.fire({
                  icon: "success",
                  title: "회원정보가 수정되었습니다🥰",
                  showConfirmButton: false,
                  timer: 1500,
                });
                history("/");
              })
              .catch((e) => {
                console.log("비밀번호 에러", e);
                Swal.fire({
                  icon: "error",
                  title: `${e}😡`,
                  showConfirmButton: true,
                });
              });
          })
          .catch((e) => {
            console.log("닉네임 오류", e);
            Swal.fire({
              icon: "error",
              title: `${e}😡`,
              showConfirmButton: true,
            });
          });
      }
      setInputs({
        email: "",
        password: "",
        setPassword: "",
        displayName: `${userNicknameValue}`,
      });
    }
  };
  return (
    <>
      <SignUpDiv>
        <SignUpForm onSubmit={UserUpdate}>
          <UserH2>내 정보</UserH2>
          <TextDiv>
            <UserFormInput
              name="email"
              type="email"
              value={userEmailValue}
              disabled
            />
          </TextDiv>
          <TextDiv>
            <UserFormInput
              name="password"
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={onChange}
            />
          </TextDiv>
          <TextDiv>
            <UserFormInput
              name="setPassword"
              type="Password"
              placeholder="비밀번호 확인"
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
