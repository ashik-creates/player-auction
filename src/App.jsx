import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Player from "./components/Players/Player";

const playerData = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

const promiseData = playerData();

function App() {
  const [balance, setBalance] = useState(6000000);

  return (
    <>
      <Navbar balance={balance}></Navbar>
      <Banner></Banner>
      <Suspense fallback={<p>Wait...</p>}>
        <Player
          balance={balance}
          setBalance={setBalance}
          playerPromise={promiseData}
        ></Player>
      </Suspense>
    </>
  );
}

export default App;
