import React from 'react'

const CoinItem = (props) => {
  return (
    <div className='coin-row'>
        <p>{props.coins.market_cap_rank}</p>
        <div>
            <img src={props.coins.image} alt=""/>
            <p>{props.coins.symbol.toUpperCase()}</p>
        </div>
        <p>₹{props.coins.current_price}</p>
        <p>{props.coins.price_change_percentage_24h}</p>
        <p>{props.coins.total_volume}</p>
        <p>{props.coins.market_cap}</p>
    </div>
  )
}

export default CoinItem