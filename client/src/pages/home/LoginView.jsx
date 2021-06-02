import React, { useEffect, useState } from "react";
import authenticate from "../../api/authenticate";
import LoginForm from "../../components/LoginForm";

const LoginView = () => {
  useEffect(() => {
    const LoginInfo = JSON.parse(localStorage.getItem("userData"));
    if (!LoginInfo) return;
    const CheckLogin = authenticate(LoginInfo.email);
    console.log(CheckLogin);
  }, []);
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default LoginView;
