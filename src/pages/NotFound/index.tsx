import React from "react";
import {
  BearImg,
  InvisibleH1,
  TextDiv,
  TextH1,
  TextH2,
  TitleDiv,
} from "./styles";

const NotFound = () => {
  return (
    <>
      <TitleDiv>
        <TextH1>4</TextH1>
        <InvisibleH1>0</InvisibleH1>
        <TextH1>4</TextH1>
        <BearImg
          src="https://user-images.githubusercontent.com/80582578/144751264-7a5a7442-9c44-4b9c-9eb0-6f30caa3ff85.png"
          alt="404"
        />
      </TitleDiv>
      <TextH2>Not Found</TextH2>
      <TextDiv>앗! 죄송합니다!</TextDiv>
      <TextDiv>페이지를 준비하지 못했습니다</TextDiv>
    </>
  );
};

export default NotFound;
