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
import { auth } from "@/utils/Firebase/firebaseConfig";
import { useSelector } from "react-redux";
import { loginEmail, loginUser } from "@/utils/Toolkit/Slice/userSlice";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const userInfo = () => {
  const navigate = useNavigate();
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
      toast.error("비밀번호가 일치하지 않습니다.", { icon: "👀" });
    } else {
      if (user) {
        updateProfile(user, {
          displayName: displayName,
        })
          .then(() => {
            updatePassword(user, password)
              .then(() => {
                toast.success("회원가입이 성공하였습니다", { icon: "👏" });
                navigate("/");
              })
              .catch((e) => {
                toast.error(`비밀번호 오류,${e}`, { icon: "😂" });
              });
          })
          .catch((e) => {
            toast.error(`닉네임 오류,${e}`, { icon: "😂" });
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
