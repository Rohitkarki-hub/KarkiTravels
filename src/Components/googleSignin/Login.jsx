import React from "react";

function Login() {
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
export default Login;
