// 라이브러리
import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import loadable from "@loadable/component";
import { onAuthStateChanged } from "@firebase/auth";
// 컴포넌트
import "./App.css";
import HeaderBig from "@/components/HeaderBig";
import HeaderSmall from "@/components/HeaderSmall";
import { auth } from "./utils/Firebase/firebaseConfig";
import { loginUser } from "./utils/Toolkit/Slice/userSlice";

// 페이지(코드 스플리팅 (페이지 단위로 하는게 좋다))
const Main = loadable(() => import("@/layouts/Main"));
const LogIn = loadable(() => import("@/pages/LogIn"));
const SignUp = loadable(() => import("@/pages/SignUp"));
const UserInfo = loadable(() => import("@/pages/UserInfo"));

function App() {
  const dispatch = useDispatch();
  const checkUser = useSelector(loginUser);

  const [isOpen, setIsOpen] = useState(false);
  const [isNickname, setIsNickname] = useState("");
  useEffect(() => {
    onAuthStateChanged(auth, (userCredential) => {
      if (userCredential) {
        console.log("상태:로그인");
        dispatch(loginUser(userCredential.displayName));
        setIsNickname(checkUser.payload.user.user);
      } else {
        console.log("상태:로그아웃");
        sessionStorage.setItem("Nick", "");
        setIsNickname("");
      }
    });
  }, [isNickname, isOpen]);
  const isPadding = isOpen ? "60px" : "230px";
  const GlobalBodyCss = styled.div`
    width: 100%;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    padding-top: ${isPadding};
  `;
  return (
    <BrowserRouter>
      <div className="App">
        {isOpen ? (
          <HeaderSmall setIsOpen={setIsOpen} isNickname={isNickname} />
        ) : (
          <HeaderBig setIsOpen={setIsOpen} isNickname={isNickname} />
        )}
        <GlobalBodyCss>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/user" element={<UserInfo />} />
          </Routes>
        </GlobalBodyCss>
      </div>
    </BrowserRouter>
  );
}

export default App;
