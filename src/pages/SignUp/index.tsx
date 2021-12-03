import React, { useState } from "react";
import { SignUpDiv, SignUpForm } from "./styles";
import { createUserWithEmailAndPassword, updateProfile } from "@firebase/auth";
import { auth } from "@/utils/Firebase/firebaseConfig";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    setPassword: "",
    displayName: "",
    photoURL: null,
  });
  const { email, password, setPassword, displayName, photoURL } = inputs;

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const Register = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (password !== setPassword) {
      alert("비밀번호가 일치하지 않습니다");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log("user", user);
          updateProfile(user, {
            displayName: displayName,
            photoURL: photoURL,
          }).then(() => {
            // console.log("유저 정보가 업데이트 되었습니다");
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
    setInputs({
      email: "",
      password: "",
      setPassword: "",
      displayName: "",
      photoURL: null,
    });
  };

  return (
    <>
      <SignUpDiv>
        <SignUpForm onSubmit={Register}>
          <h2>회원가입</h2>
          <div>
            <input
              name="email"
              type="email"
              placeholder="이메일 주소"
              required
              value={email}
              onChange={onChange}
            />
          </div>
          <div>
            <input
              name="password"
              type="password"
              placeholder="비밀번호"
              required
              value={password}
              onChange={onChange}
            />
          </div>
          <div>
            <input
              name="setPassword"
              type="Password"
              placeholder="비밀번호 확인"
              required
              value={setPassword}
              onChange={onChange}
            />
          </div>
          <div>
            <input
              name="displayName"
              type="text"
              placeholder="닉네임"
              required
              value={displayName}
              onChange={onChange}
            />
          </div>

          <div>
            <input type="submit" value="회원가입" />
          </div>
        </SignUpForm>
      </SignUpDiv>
    </>
  );
};

export default SignUp;
