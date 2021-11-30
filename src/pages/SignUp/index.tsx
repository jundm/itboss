import React, { useState } from "react";
import { SignUpDiv } from "./styles";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "@firebase/auth";
import { auth } from "@/utils/Firebase/firebaseConfig";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    setPassword: "",
  });
  const { email, password, setPassword } = inputs;

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
    });
  };

  // const user = auth.currentUser;
  // console.log("user", user);

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     const uid = user.uid;
  //     console.log(uid, "유저가 로그인 되었습니다");
  //     const displayName = user.displayName;
  //     const email = user.email;
  //     const photoURL = user.photoURL;
  //     const emailVerified = user.emailVerified;

  //     console.log("displayName", displayName); // null
  //     // console.log("email", email); // true
  //     // console.log("photoURL", photoURL); //null
  //     // console.log("emailVerified", emailVerified); //false
  //     // console.log("uid", uid); // true
  //   } else {
  //     console.log("로그인되어있지 않았습니다");
  //   }
  // });

  return (
    <>
      <SignUpDiv>
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
          <button onClick={Register}>회원가입</button>
        </div>
      </SignUpDiv>
    </>
  );
};

export default SignUp;
