import React from 'react';
import CoinItem from './CoinItem';

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
            {props.coins.map(coins =>{
                return <CoinItem coins = {coins} key={coins.id}/>
            })}
        </div>
    </div>
  )
}

export default Coin