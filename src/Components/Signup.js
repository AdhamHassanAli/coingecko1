import React from 'react'
import './Signup.css'
import Crypto from '../Assets/trade.png'
function Signup() {
  return (
    <div className='signup'>
        <div className='container'>
            {/* left side */}
            <div className='left'>
                <img src={Crypto} alt="/" />
            </div>

            {/* right */}
            <div className='right'>
                <h2>Eran passive income with crypto</h2>
                <p>Earn up to 12% annual rewards ib 30+ disgital assests.</p>
                <div className='input-container'>
                    <input type="email" placeholder='Enter Your Email' />
                    <button className='btn'>Learn More</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Signup
