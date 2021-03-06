import styled from "@emotion/styled";

export const TextDiv = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  font-size: 3vmax;
  color: #fff;
`;
export const TitleDiv = styled.div`
  letter-spacing: 1vmax;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TextH1 = styled.h1`
  font-size: 15vmax;
  color: #fff;
`;
export const TextH2 = styled.h2`
  text-align: center;
  font-size: 5vmax;
  color: #fff;
`;
export const InvisibleH1 = styled.h1`
  font-size: 15vmax;
  color: #ffffff10;
`;

const rand = Math.random();
export const BearImg = styled.img`
  width: 15vmax;
  object-fit: contain;
  position: absolute;
  transform: translate(-5px, 5px);
  @keyframes headRotate {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(20deg);
    }
    50% {
      transform: rotate(-20deg);
    }
    75% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  animation: headRotate 3s ease-in-out infinite;
`;
