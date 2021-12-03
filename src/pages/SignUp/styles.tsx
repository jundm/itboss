import styled from "@emotion/styled";

export const SignUpDiv = styled.div`
  /* background: gray; */
  text-align: center;
  display: flex;
  justify-content: center;
`;
export const SignUpForm = styled.form`
  /* background: yellow; */
  width: 400px;
  height: 100%;
  border-radius: 15px;
  /* border: 1px solid; */
`;

export const UserH2 = styled.h2`
  font-size: 1.3rem;
  font-weight: bold;
`;
export const TextDiv = styled.div`
  border-bottom: 2px solid #adadad;
  margin: 30px;
  padding: 10px 10px;
`;
export const UserFormInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  color: #636e72;
  font-size: 16px;
  height: 25px;
  background: none;
`;

export const UserSubmitInput = styled.input`
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
  :hover {
    background-position: right;
  }
`;
