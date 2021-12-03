import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HeaderOutLineSmall,
  MenuLi,
  MenuUl,
  Logo,
  WidthDiv,
  LoginSignUp,
  Div,
  UserNameDiv,
} from "./styles";

interface HeaderProps {
  isNickname: string;
  setIsOpen: (arg: (isOpen: any) => boolean) => void;
}

const HeaderSmall = (props: HeaderProps) => {
  const toggleHeader = () => {
    props.setIsOpen((isOpen) => !isOpen);
  };
  const LogoSrc =
    "https://user-images.githubusercontent.com/80582578/144034497-0aec68e3-393e-4b7c-bfc2-1a68fbfaa569.png";
  if (props.isNickname != null) {
    sessionStorage.setItem("Nick", props.isNickname);
  }
  const NickName = sessionStorage.getItem("Nick");
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
            {NickName ? (
              <>
                <UserNameDiv>{NickName}</UserNameDiv>
              </>
            ) : (
              <>
                <Link to="/login">
                  <LoginSignUp>😘로그인</LoginSignUp>
                </Link>
              </>
            )}
          </WidthDiv>
        </Div>
      </HeaderOutLineSmall>
    </>
  );
};

export default HeaderSmall;
