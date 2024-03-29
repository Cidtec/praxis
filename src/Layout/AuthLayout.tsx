import React from "react";
import Landing from "../Component/Layout/Landing/Landing";
import Landing2 from "../Component/Layout/Landing2/Landing2";
import { useNavigate } from "react-router-dom";

const AuthLayout = () => {
  const navigate = useNavigate();
  const token: any = localStorage.getItem("token");
  return (
    <>
      {" "}
      {/* <Landing /> */}
      <Landing2 />
    </>
  );
};

export default AuthLayout;
