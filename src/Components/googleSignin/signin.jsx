import React, { useEffect, useState } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import Home from "./Login";

function SignIn() {
  const [value, setValue] = useState("null");
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });

  return (
    <div>
      {value ? <Home /> : <button onClick={handleClick}>Signin </button>}
    </div>
  );
}
export default SignIn;
