import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const CenterDiv = styled.div`
  margin: 0 auto;
  max-width: 850px;
  height: 80%;
`;

export const BoxDiv = styled.div`
  border: 3px solid rgb(210, 182, 131);
  border-radius: 10px;
  background-color: #fff;
`;

export const BoardDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  /* justify-content: center; */
  cursor: pointer;
  :hover {
    background: rgb(235, 186, 95);
  }
`;

export const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 20px;
  align-items: center;
`;

export const TitleDiv = styled.h4``;
export const UserDiv = styled.div`
  margin-right: 10px;
`;
export const DateDiv = styled.div``;
export const DviedDiv = styled.div`
  display: flex;
  color: black;
`;
export const Links = styled(Link)`
  :link {
    color: #8a6f00;
  }
`;
export const CreateButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border-width: 2px;
  border-style: solid;
  border-color: #0b090a;
  color: #000000;
  padding: 0.25em 1em;
  font-size: 20px;
  cursor: pointer;
`;
