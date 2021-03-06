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
import { loginUid, loginUser } from "@/utils/Toolkit/Slice/userSlice";

interface HeaderProps {
  saveLocalStorage: () => void;
  setIsOpen: (arg: (isOpen: any) => boolean) => void;
}

const HeaderBig = (props: HeaderProps) => {
  const Uid = useSelector(loginUid);
  const User = useSelector(loginUser);
  const NickName = User.payload.userReducer.user;
  const slug = Uid.payload.userReducer.uid;
  const toggleHeader = () => {
    props.setIsOpen((isOpen) => !isOpen);
    props.saveLocalStorage();
  };
  const LogoSrc =
    "https://user-images.githubusercontent.com/80582578/144034480-76511228-6aae-49da-ba24-92220954ce41.png";

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
                  <ProfileDiv>λπ</ProfileDiv>
                  <Logout onClick={signOutButton}>logout</Logout>
                </HeaderLoginDiv>
              </>
            ) : (
              <>
                <Link to="/login">
                  <LoginSignUp>πλ‘κ·ΈμΈ</LoginSignUp>
                </Link>
                <Link to="/signup">
                  <LoginSignUp>π₯°νμκ°μ</LoginSignUp>
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
          <FaceMessageDiv>π μμ·κ³°μ λλ₯΄λ©΄ λ©λ΄κ° μ νμ! </FaceMessageDiv>
        </Div>
        <MenuUl>
          <HeaderLink to="/popularity">
            <MenuLi>πμΈκΈ°</MenuLi>
          </HeaderLink>
          <HeaderLink to="/question">
            <MenuLi>πμ§λ¬Έ</MenuLi>
          </HeaderLink>
          <HeaderLink to="/free">
            <MenuLi>πμν΅</MenuLi>
          </HeaderLink>
          <HeaderLink to="/news">
            <MenuLi>π₯³λ΄μ€</MenuLi>
          </HeaderLink>
        </MenuUl>
      </HeaderOutLineBig>
    </>
  );
};

export default HeaderBig;
