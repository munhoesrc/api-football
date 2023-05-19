import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import useGetData from "../services/requests";


function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 3000);

    return () => 
    {
      clearTimeout(timer);
    }
  }, [navigate]);

  return (
    <div>
      <main>
        <h1>Login..</h1>
      </main>
    </div>
  );
};

export default Login;
