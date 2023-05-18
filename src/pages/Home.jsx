import React from "react";
import useGetData from "../services/requests";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MyComponent = () => {
  const API = "https://v3.football.api-sports.io/status";
  const data = useGetData(API);
  console.log("teste", data);

  return (
    <div>
      <Navbar />
      <main>

      </main>
      <Footer />
    </div>
  );
};

export default MyComponent;
