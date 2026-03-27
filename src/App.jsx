import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Player from "./components/Players/Player";
import Loader from "./components/Loader/Loader";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";

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
      <Suspense fallback={<Loader></Loader>}>
        <Player
          balance={balance}
          setBalance={setBalance}
          playerPromise={promiseData}
        ></Player>
      </Suspense>
      <Footer></Footer>
      {/* react-toastify */}
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
