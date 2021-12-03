import React from "react";
import Swal from "sweetalert2";

function Main() {
  const onButton = () => {
    Swal.fire({
      icon: "success",
      title: "로그인 되었습니다🥰",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div>
      메인이에용
      <h1>
        <button onClick={onButton}>test</button>
      </h1>
    </div>
  );
}

export default Main;
