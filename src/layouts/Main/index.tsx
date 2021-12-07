import React from "react";
import { useNavigate } from "react-router";

interface MainProps {}

function Main({}: MainProps) {
  const navigate = useNavigate();
  return (
    <div>
      <h1>메인이에용</h1>
      <button onClick={() => navigate("/create")}>글쓰기</button>
    </div>
  );
}

export default Main;
