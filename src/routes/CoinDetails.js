import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import DOMPurify from 'dompurify';
import { useNavigate, useParams } from 'react-router-dom';


import './CoinDetails.css';


const CoinDetails = () => {

  const params = useParams();
  const [coinDetails, setCoinDetails] = useState([]);

  const URL = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    axios.get(URL)
      .then((res) => {
        setCoinDetails(res.data)
      }).catch((err) => {
        console.log(err);
      })

  }, []);

  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div className='coin-container'>
        
        <button onClick={() => navigate(-1)} className='hero-btn'>⬅ Back</button>

        <div className='content'>
          <h1>{coinDetails.name}</h1>
        </div>
        <div className='content'>
          <div className='rank'>
            <span className='rank-btn'> Rank # {coinDetails.market_cap_rank}</span>
          </div>

          <div className='info'>
            <div className='coin-heading'>
              {coinDetails.image ? <img src={coinDetails.image.small} alt="" /> : null}
              <p>{coinDetails.name}</p>
            </div>

            <div className='coin-price'>
              {coinDetails.market_data?.current_price ? <h1> ₹{coinDetails.market_data.current_price.inr.toLocaleString()}</h1> : null}
            </div>
          </div>
        </div>

        <div className='content'>
          <table>
            <thead>
              <tr>
                <th>1 Hour</th>
                <th>24 Hour</th>
                <th>30 Days</th>
                <th>1 Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{coinDetails.market_data?.price_change_percentage_1h_in_currency ? <p>₹{coinDetails.market_data.price_change_percentage_1h_in_currency.inr.toFixed(1)}%</p> : null}</td>
                <td>{coinDetails.market_data?.price_change_percentage_24h_in_currency ? <p>₹{coinDetails.market_data.price_change_percentage_24h_in_currency.inr.toFixed(1)}%</p> : null}</td>
                <td>{coinDetails.market_data?.price_change_percentage_30d_in_currency ? <p>₹{coinDetails.market_data.price_change_percentage_30d_in_currency.inr.toFixed(1)}%</p> : null}</td>
                <td>{coinDetails.market_data?.price_change_percentage_1y_in_currency ? <p>₹{coinDetails.market_data.price_change_percentage_1y_in_currency.inr.toFixed(1)}%</p> : null}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='content'>
          <div className='stats'>
            <div className='left'>
              <div className='row'>
                <h4>24 Hour Low</h4>
                {coinDetails.market_data?.low_24h ? <p>₹{coinDetails.market_data.low_24h.inr.toLocaleString()}</p> : null}
              </div>
              <div className='row'>
                <h4>24 Hour High</h4>
                {coinDetails.market_data?.high_24h ? <p>₹{coinDetails.market_data.high_24h.inr.toLocaleString()}</p> : null}                            </div>

            </div>
            <div className='right'>
              <div className='row'>
                <h4>Market Cap</h4>
                {coinDetails.market_data?.market_cap ? <p>₹{coinDetails.market_data.market_cap.inr.toLocaleString()}</p> : null}
              </div>
              <div className='row'>
                <h4>Circulating Supply</h4>
                {coinDetails.market_data ? <p>{coinDetails.market_data.circulating_supply}</p> : null}
              </div>

            </div>
          </div>
        </div>
        <div className='content'>
          <div className='about'>
            <h3>About</h3>
            <p dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(coinDetails.description ? coinDetails.description.en : ''),
            }}>

            </p>

          </div>
        </div>

      </div>

    </React.Fragment>
  )
}

export default CoinDetails;