// 라이브러리
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import loadable from "@loadable/component";
import { onAuthStateChanged } from "@firebase/auth";
// 컴포넌트
import "./App.css";
import HeaderBig from "@/components/HeaderBig";
import HeaderSmall from "@/components/HeaderSmall";
import { auth } from "./utils/Firebase/firebaseConfig";
import { loginUser } from "./utils/Toolkit/Slice/userSlice";
import { persistor } from "./utils/Toolkit/store";

// 페이지(코드 스플리팅 (페이지 단위로 하는게 좋다))
const Main = loadable(() => import("@/layouts/Main"));
const LogIn = loadable(() => import("@/pages/LogIn"));
const SignUp = loadable(() => import("@/pages/SignUp"));

function App() {
  const dispatch = useDispatch();
  const checkUser = useSelector(loginUser);

  useEffect(() => {
    onAuthStateChanged(auth, (userCredential) => {
      // console.log("effectAuth", auth);
      if (userCredential) {
        console.log("상태:로그인");
        // console.log("effectUser", userCredential);
        dispatch(loginUser(userCredential.displayName));
        setIsNickname(checkUser.payload.userReducer.user);
      } else {
        console.log("상태:로그아웃");
      }
    });
  }, [checkUser, dispatch]);

  const [isOpen, setIsOpen] = useState(false);
  const [isNickname, setIsNickname] = useState("");

  const isPadding = isOpen ? "50px" : "230px";
  const GlobalBodyCss = styled.div`
    width: 100%;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    padding-top: ${isPadding};
  `;
  // const aame = JSON.stringify(localStorage);
  // console.log("localStorage", localStorage.getItem("user"));

  // const loadState = () => {
  //   try {
  //     const serializedState = localStorage.getItem("userReducer");
  //     if (serializedState === null) {
  //       return undefined;
  //     }
  //     return JSON.parse(serializedState);
  //   } catch (err) {
  //     return undefined;
  //   }
  // };
  // console.log("loadState", loadState);

  const saveState = (state: any) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("state", serializedState);
    } catch {
      // ignore write errors
    }
  };
  saveState("test");
  console.log("saveState");
  const loadState = () => {
    try {
      const serializedState = localStorage.getItem("state");
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  };
  console.log("  loadState()", loadState());
  return (
    <BrowserRouter>
      <div className="App">
        {isOpen ? (
          <HeaderSmall setIsOpen={setIsOpen} />
        ) : (
          <HeaderBig setIsOpen={setIsOpen} isNickname={isNickname} />
        )}
        <GlobalBodyCss>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </GlobalBodyCss>
      </div>
    </BrowserRouter>
  );
}

export default App;
