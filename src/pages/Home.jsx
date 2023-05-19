import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useGetData from "../services/requests";

function Home() {
  const API = "https://v3.football.api-sports.io/fixtures?live=all";
  const [partidas, setPartidas] = useState(null);

  const partidasData = useGetData(API);

  useEffect(() => {
    setPartidas(partidasData);
  }, [partidasData]);

  return (
    <div>
      <Navbar />
      <header className="App-header">
        <h1 className="title-home">Partidas ao vivo</h1>
        {partidas ? (
          partidas.map((partida) => (
            <div className="container-home" key={partida.fixture.id}>
              <div className="team-home">
                <h1>{partida.teams.home.name}</h1>
                <img
                  src={partida.teams.home.logo}
                  className="img-team"
                  alt="Equipe local"
                />
                <h2 className="score"> {partida.goals.home} </h2>
              </div>
              <div className="div-vs">
                <h1>VS</h1>
                <p> {partida.fixture.status.elapsed} ' </p>
              </div>
              <div className="team-away">
                <h1>{partida.teams.away.name}</h1>
                <img
                  src={partida.teams.away.logo}
                  className="img-team"
                  alt="Equipe visitante"
                />
                <h2 className="score">{partida.goals.away}</h2>
              </div>
            </div>
          ))
        ) : null}
      </header>
      <Footer />
    </div>
  );
}

export default Home;
