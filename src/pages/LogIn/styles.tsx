import styled from "@emotion/styled";

export const LoginDiv = styled.div`
  /* background: gray; */
  text-align: center;
  display: flex;
  justify-content: center;
`;
export const LoginForm = styled.form`
  /* background: yellow; */
  width: 400px;
  height: 100%;
  border-radius: 15px;
  /* border: 1px solid; */
`;
export const LoginError = styled.span`
  color: red;
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
  ::placeholder {
    color: #b1b1b1;
  }
`;

export const UserSubmitInput = styled.input`
  width: 80%;
  height: 40px;
  text-align: center;
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
