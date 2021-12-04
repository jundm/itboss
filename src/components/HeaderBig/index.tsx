import { signOutButton } from "@/elements/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HeaderOutLineBig,
  MenuLi,
  MenuUl,
  Logo,
  AuthenticationDiv,
  WidthDiv,
  Div,
  FaceDiv,
  LoginSignUp,
  FaceMessageDiv,
  HeaderLoginDiv,
  UserNameDiv,
  ProfileDiv,
  Logout,
} from "./styles";

interface HeaderProps {
  isNickname: string;
  saveLocalStorage: () => void;
  setIsOpen: (arg: (isOpen: any) => boolean) => void;
}

const HeaderBig = (props: HeaderProps) => {
  const toggleHeader = () => {
    props.setIsOpen((isOpen) => !isOpen);
    props.saveLocalStorage();
  };
  const LogoSrc =
    "https://user-images.githubusercontent.com/80582578/144034480-76511228-6aae-49da-ba24-92220954ce41.png";
  if (props.isNickname != "") {
    sessionStorage.setItem("Nick", props.isNickname);
  }
  const NickName = sessionStorage.getItem("Nick");

  return (
    <>
      <HeaderOutLineBig>
        <WidthDiv>
          <AuthenticationDiv>
            {NickName ? (
              <>
                <HeaderLoginDiv>
                  <Link to="/user">
                    <UserNameDiv>{NickName}</UserNameDiv>
                  </Link>
                  <ProfileDiv>님😍</ProfileDiv>
                  <Logout onClick={signOutButton}>로갓</Logout>
                </HeaderLoginDiv>
              </>
            ) : (
              <>
                <Link to="/login">
                  <LoginSignUp>😘로그인</LoginSignUp>
                </Link>
                <Link to="/signup">
                  <LoginSignUp>🥰회원가입</LoginSignUp>
                </Link>
              </>
            )}
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
