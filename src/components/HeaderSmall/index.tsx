import React, { useState } from "react";
import {
  HeaderOutLineSmall,
  MenuLi,
  MenuUl,
  Logo,
  AuthenticationDiv,
  WidthDiv,
  LoginSignUp,
  Div,
} from "./styles";

interface HeaderProps {
  setIsOpen: (arg: (isOpen: any) => boolean) => void;
}

const HeaderSmall = (props: HeaderProps) => {
  const toggleHeader = () => {
    props.setIsOpen((isOpen) => !isOpen);
  };
  const LogoSrc =
    "https://user-images.githubusercontent.com/80582578/144034497-0aec68e3-393e-4b7c-bfc2-1a68fbfaa569.png";
  return (
    <>
      <HeaderOutLineSmall>
        <Div>
          <WidthDiv>
            <Logo src={LogoSrc} onClick={toggleHeader} />
            <MenuUl>
              <MenuLi>😎인기</MenuLi>
              <MenuLi>🙈질문</MenuLi>
              <MenuLi>😆소통</MenuLi>
              <MenuLi>🥳뉴스</MenuLi>
            </MenuUl>
            <LoginSignUp>😘로그인</LoginSignUp>
          </WidthDiv>
        </Div>
      </HeaderOutLineSmall>
    </>
  );
};

export default HeaderSmall;
