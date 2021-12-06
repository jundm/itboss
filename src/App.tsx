// 라이브러리
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import loadable from "@loadable/component";
import { onAuthStateChanged } from "@firebase/auth";
// 컴포넌트
import "./App.css";
import HeaderBig from "@/components/HeaderBig";
import HeaderSmall from "@/components/HeaderSmall";
import { auth } from "@/utils/Firebase/firebaseConfig";
import {
  loginEmail,
  loginUid,
  loginUser,
} from "@/utils/Toolkit/Slice/userSlice";

// 페이지(코드 스플리팅 (페이지 단위로 하는게 좋다))
const Main = loadable(() => import("@/layouts/Main"));
const LogIn = loadable(() => import("@/pages/LogIn"));
const SignUp = loadable(() => import("@/pages/SignUp"));
const UserInfo = loadable(() => import("@/pages/UserInfo"));
import { Toaster } from "react-hot-toast";
import NotFound from "./pages/NotFound";
import { RequireAuth } from "./pages/ProtectedPage/index";

function App() {
  const dispatch = useDispatch();
  const checkUser = useSelector(loginUser);
  const [isOpen, setIsOpen] = useState(false);
  const [isNickname, setIsNickname] = useState("");
  const [isUid, setIsUid] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (userCredential) => {
      if (userCredential) {
        const userInfoList = [
          loginUser(userCredential.displayName),
          loginEmail(userCredential.email),
          loginUid(userCredential.uid),
        ];
        userInfoList.map((e) => dispatch(e));
        setIsNickname(checkUser.payload.user.user);
        setIsUid(checkUser.payload.user.uid);
      } else {
        console.log("상태:로그아웃");
        sessionStorage.setItem("Nick", "");
        sessionStorage.setItem("UID", "");
        setIsNickname("");
        setIsUid("");
      }
    });
  }, [checkUser]);
  useEffect(() => {
    const isOpen = localStorage.getItem("toogle");
    if (isOpen) {
      setIsOpen(JSON.parse(isOpen));
    }
  }, [isOpen]);

  const saveLocalStorage = () => {
    localStorage.setItem("toogle", JSON.stringify(!isOpen));
  };

  const isPadding = isOpen ? "60px" : "240px";
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
          <HeaderSmall
            saveLocalStorage={saveLocalStorage}
            setIsOpen={setIsOpen}
            isNickname={isNickname}
            isUid={isUid}
          />
        ) : (
          <HeaderBig
            saveLocalStorage={saveLocalStorage}
            setIsOpen={setIsOpen}
            isNickname={isNickname}
            isUid={isUid}
          />
        )}
        <Toaster position="top-right" />
        <GlobalBodyCss>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route element={<RequireAuth />}>
              <Route path="/user/:slug" element={<UserInfo />} />
            </Route>
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </GlobalBodyCss>
      </div>
    </BrowserRouter>
  );
}

export default App;
