import { loginUid, loginUser } from "@/utils/Toolkit/Slice/userSlice";
import React from "react";
import { useSelector } from "react-redux";
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
  saveLocalStorage: () => void;
  setIsOpen: (arg: (isOpen: any) => boolean) => void;
}

const HeaderSmall = (props: HeaderProps) => {
  const Uid = useSelector(loginUid);
  const User = useSelector(loginUser);
  const NickName = User.payload.userReducer.user;
  const slug = Uid.payload.userReducer.uid;
  const toggleHeader = () => {
    props.setIsOpen((isOpen) => !isOpen);
    props.saveLocalStorage();
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
                <Link to={`/user/${slug}`}>
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
