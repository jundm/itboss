import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";
import styled from "@emotion/styled";
import HeaderBig from "@/components/HeaderBig";
import HeaderSmall from "@/components/HeaderSmall";

// 코드 스플리팅 (페이지 단위로 하는게 좋다)
const Main = loadable(() => import("@/layouts/Main"));
const LogIn = loadable(() => import("@/pages/LogIn"));
const SignUp = loadable(() => import("@/pages/SignUp"));

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const isPadding = isOpen ? "50px" : "230px";
  const PaddingTop = styled.div`
    padding-top: ${isPadding};
  `;
  return (
    <BrowserRouter>
      <div className="App">
        {isOpen ? (
          <HeaderSmall setIsOpen={setIsOpen} />
        ) : (
          <HeaderBig setIsOpen={setIsOpen} />
        )}
        <PaddingTop>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </PaddingTop>
      </div>
    </BrowserRouter>
  );
}

export default App;
