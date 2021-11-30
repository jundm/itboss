import React, { useState } from "react";
import {
  HeaderOutLineBig,
  MenuLi,
  MenuUl,
  Logo,
  AuthenticationDiv,
  WidthDiv,
  LoginSignUp,
  Div,
  FaceDiv,
  FaceMessageDiv,
} from "./styles";

interface HeaderProps {
  setIsOpen: (arg: (isOpen: any) => boolean) => void;
}

const HeaderBig = (props: HeaderProps) => {
  const toggleHeader = () => {
    props.setIsOpen((isOpen) => !isOpen);
  };
  const LogoSrc =
    "https://user-images.githubusercontent.com/80582578/144034480-76511228-6aae-49da-ba24-92220954ce41.png";
  return (
    <>
      <HeaderOutLineBig>
        <WidthDiv>
          <AuthenticationDiv>
            <LoginSignUp>😘로그인</LoginSignUp>
            <LoginSignUp>🥰회원가입</LoginSignUp>
          </AuthenticationDiv>
        </WidthDiv>
        <Div>
          <Logo src={LogoSrc} />
          <FaceDiv onClick={toggleHeader} />
          <FaceMessageDiv>👈 응슷곰을 누르면 메뉴가 접혀요! </FaceMessageDiv>
        </Div>
        <MenuUl>
          <MenuLi>😎인기</MenuLi>
          <MenuLi>🙈질문</MenuLi>
          <MenuLi>😆소통</MenuLi>
          <MenuLi>🥳뉴스</MenuLi>
        </MenuUl>
      </HeaderOutLineBig>
    </>
  );
};

export default HeaderBig;
