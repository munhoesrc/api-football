import React from "react";
// import useGetData from "../services/requests";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {
  // const API = "https://v3.football.api-sports.io/status";
  // const data = useGetData(API);
  // console.log("teste", data);

  return (
    <div>
      <Navbar />
      <main className="main">
        <h1>Loading...</h1>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
