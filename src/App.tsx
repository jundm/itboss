// 라이브러리
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import loadable from "@loadable/component";
import { Toaster } from "react-hot-toast";
import { onAuthStateChanged } from "@firebase/auth";
// 컴포넌트
import "./App.css";
import HeaderBig from "@/components/HeaderBig";
import HeaderSmall from "@/components/HeaderSmall";
import { auth, db } from "@/utils/Firebase/firebaseConfig";
import {
  loginEmail,
  loginUid,
  loginUser,
} from "@/utils/Toolkit/Slice/userSlice";
import { AlreadyAuth, RequireAuth } from "./pages/ProtectedPage/index";
import { collection } from "@firebase/firestore";

// 페이지(코드 스플리팅 (페이지 단위로 하는게 좋다))
const Main = loadable(() => import("@/layouts/Main"));
const LogIn = loadable(() => import("@/pages/LogIn"));
const SignUp = loadable(() => import("@/pages/SignUp"));
const UserInfo = loadable(() => import("@/pages/UserInfo"));
const NotFound = loadable(() => import("@/pages/NotFound"));
const BoardFree = loadable(() => import("@/pages/BoardFree"));
const BoardNews = loadable(() => import("@/pages/BoardNews"));
const BoardPopularity = loadable(() => import("@/pages/BoardPopularity"));
const BoardQuestion = loadable(() => import("@/pages/BoardQuestion"));
const PostCreate = loadable(() => import("@/pages/PostCreate"));

function App() {
  const dispatch = useDispatch();
  const checkUser = useSelector(loginUser);
  console.log("checkUser", checkUser);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (userCredential) => {
      if (userCredential) {
        console.log("상태:로그인");
        const userInfoList = [
          loginUser(userCredential.displayName),
          loginEmail(userCredential.email),
          loginUid(userCredential.uid),
        ];
        userInfoList.map((e) => dispatch(e));
      } else {
        console.log("상태:로그아웃");
        const userInfoList = [
          loginUser(undefined),
          loginEmail(undefined),
          loginUid(undefined),
        ];
        userInfoList.map((e) => dispatch(e));
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
  const user = collection(db, "user");
  console.log("user", user);

  return (
    <BrowserRouter>
      <div className="App">
        {isOpen ? (
          <HeaderSmall
            saveLocalStorage={saveLocalStorage}
            setIsOpen={setIsOpen}
          />
        ) : (
          <HeaderBig
            saveLocalStorage={saveLocalStorage}
            setIsOpen={setIsOpen}
          />
        )}
        <Toaster position="top-right" />
        <GlobalBodyCss>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route element={<AlreadyAuth />}>
              <Route path="/login" element={<LogIn />} />
              <Route path="/signup" element={<SignUp />} />
            </Route>
            <Route path="/popularity" element={<BoardPopularity />} />
            <Route path="/question" element={<BoardQuestion />} />
            <Route path="/free" element={<BoardFree />} />
            <Route path="/news" element={<BoardNews />} />
            <Route element={<RequireAuth />}>
              <Route path="/user/:slug" element={<UserInfo />} />
              <Route path="/free/create" element={<PostCreate />} />
            </Route>
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </GlobalBodyCss>
      </div>
    </BrowserRouter>
  );
}

export default App;
