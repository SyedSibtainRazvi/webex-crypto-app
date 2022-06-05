import React from "react";
import { useState, useEffect, Fragment } from "react";

import axios from "axios";
import Coin from "./components/Coin";

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
      <Coin coins ={coins}/>
    </Fragment>
  );
}

export default App;
