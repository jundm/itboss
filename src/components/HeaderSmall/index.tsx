import React from "react";
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
  ProfileDiv,
} from "./styles";

interface HeaderProps {
  isNickname: string;
  isUid: string;
  saveLocalStorage: () => void;
  setIsOpen: (arg: (isOpen: any) => boolean) => void;
}

const HeaderSmall = (props: HeaderProps) => {
  const toggleHeader = () => {
    props.setIsOpen((isOpen) => !isOpen);
    props.saveLocalStorage();
  };
  const LogoSrc =
    "https://user-images.githubusercontent.com/80582578/144034497-0aec68e3-393e-4b7c-bfc2-1a68fbfaa569.png";
  if (props.isNickname != "") {
    sessionStorage.setItem("Nick", props.isNickname);
    sessionStorage.setItem("UID", props.isUid);
  }
  const NickName = sessionStorage.getItem("Nick");
  return (
    <>
      <HeaderOutLineSmall>
        <Div>
          <WidthDiv>
            <Logo src={LogoSrc} onClick={toggleHeader} />
            <MenuUl>
              <Link to="/popularity">
                <MenuLi>😎인기</MenuLi>
              </Link>
              <Link to="/question">
                <MenuLi>🙈질문</MenuLi>
              </Link>
              <Link to="/free">
                <MenuLi>😆소통</MenuLi>
              </Link>
              <Link to="/news">
                <MenuLi>🥳뉴스</MenuLi>
              </Link>
            </MenuUl>
            {NickName ? (
              <>
                <Link to="/user">
                  <UserNameDiv>{NickName.slice(0, 2)}</UserNameDiv>
                </Link>
                <ProfileDiv>님😍</ProfileDiv>
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
