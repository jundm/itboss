import styled from "@emotion/styled";

//login
export const TextDiv = styled.div`
  /* input밑에 줄그어주는 양식 */
  /* border-bottom: 2px solid #adadad; */
  border-bottom: 2px solid #ffffff;
  margin: 30px;
  padding: 10px 10px;
`;
export const UserFormInput = styled.input`
  /* input 양식 */
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
  :hover {
    background-position: right;
  }
`;
