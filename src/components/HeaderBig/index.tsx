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
  HeaderLink,
} from "./styles";
import { signOutButton } from "@/elements/auth";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { loginUid } from "@/utils/Toolkit/Slice/userSlice";

interface HeaderProps {
  isUid: string;
  isNickname: string;
  saveLocalStorage: () => void;
  setIsOpen: (arg: (isOpen: any) => boolean) => void;
}

const HeaderBig = (props: HeaderProps) => {
  const Uid = useSelector(loginUid);
  const slug = Uid.payload.user.uid;
  const toggleHeader = () => {
    props.setIsOpen((isOpen) => !isOpen);
    props.saveLocalStorage();
  };
  const LogoSrc =
    "https://user-images.githubusercontent.com/80582578/144034480-76511228-6aae-49da-ba24-92220954ce41.png";
  if (props.isNickname != "") {
    sessionStorage.setItem("Nick", props.isNickname);
    sessionStorage.setItem("UUID", props.isUid);
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
                  <Link to={`/user/${slug}`}>
                    <UserNameDiv>{NickName}</UserNameDiv>
                  </Link>
                  <ProfileDiv>님😍</ProfileDiv>
                  <Logout onClick={signOutButton}>logout</Logout>
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
          <Link to="/">
            <Logo src={LogoSrc} />
          </Link>
          <FaceDiv onClick={toggleHeader} />
          <FaceMessageDiv>👈 응슷곰을 누르면 메뉴가 접혀요! </FaceMessageDiv>
        </Div>
        <MenuUl>
          <HeaderLink to="/popularity">
            <MenuLi>😎인기</MenuLi>
          </HeaderLink>
          <HeaderLink to="/question">
            <MenuLi>🙈질문</MenuLi>
          </HeaderLink>
          <HeaderLink to="/free">
            <MenuLi>😆소통</MenuLi>
          </HeaderLink>
          <HeaderLink to="/news">
            <MenuLi>🥳뉴스</MenuLi>
          </HeaderLink>
        </MenuUl>
      </HeaderOutLineBig>
    </>
  );
};

export default HeaderBig;
