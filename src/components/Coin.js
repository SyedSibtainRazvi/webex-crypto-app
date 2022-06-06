import React from 'react';
import CoinItem from './CoinItem';
import './Coin.css'
import { Link } from 'react-router-dom';
import CoinDetails from '../routes/CoinDetails';

const Coin = (props) => {
  return (
    <div className='container'>
      <div>
        <div className='heading'>
          <p>#</p>
          <p className='coin-name'>Coin</p>
          <p>Price</p>
          <p>24H</p>
          <p className='hide-mobile'>Volume</p>
          <p className='hide-mobile'>Market Cap</p>
        </div>
        {props.coins.map(coins => {
          return (
            <Link to={`/coin/${coins.id}`} element={<CoinDetails />} key={coins.id}>
                <CoinItem coins={coins} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Coin