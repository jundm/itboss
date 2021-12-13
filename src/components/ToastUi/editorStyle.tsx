import styled from "@emotion/styled";

export const TitleInput = styled.input`
  width: 100%;
  /* border: none; */
  /* outline: none; */
  /* color: #636e72; */
  font-size: 16px;
  height: 25px;
`;

export const SubmitInput = styled.input`
  text-align: center;
  width: 80%;
  height: 40px;
  background: linear-gradient(125deg, #81ecec, #6c5ce7, #81ecec);
  background-position: left;
  background-size: 200%;
  color: white;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: 0.4s;
  display: inline;
  font-size: 1.4rem;
  :hover {
    background-position: right;
  }
`;

export const CreateForm = styled.form`
  height: 100%;
  border-radius: 15px;
`;

export const CenterDiv = styled.div`
  flex: 0.3;
  align-items: center;
  text-align: center;
`;
