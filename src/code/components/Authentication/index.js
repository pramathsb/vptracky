import React from "react";
import { useNavigate } from "react-router-dom";

function Authentication() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("vehicles");
  };
  return (
    <>
      <button type="button" className="btn btn-primary btn-lg me-2" onClick={handleLogin}>
        Login
      </button>
      <button type="button" className="btn btn-danger btn-lg" onClick={handleLogin}>
        Signup
      </button>
    </>
  );
}

export default Authentication;
