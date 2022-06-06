import React from "react";
import { useState, useEffect, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Coin from "./components/Coin";
import CoinDetails from "./routes/CoinDetails"

import Navbar from "./components/Navbar";
function App() {

  const [coins, setCoins] = useState([]);
  const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=20&page=1&sparkline=false'

  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        setCoins(response.data)
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  return (
    <Fragment>

      <Navbar />

      <Routes>
        <Route path="/" element={<Coin coins={coins} />} />
        <Route path="/coin" element={<CoinDetails />}>
          <Route path=":coinId" element={<CoinDetails />} />
        </Route>
      </Routes>

    </Fragment>
  );
}

export default App;
