import React, { useState } from 'react';
import './App.css';

import PayPal from './Paypal';

function App() {
  const [checkout,setCheckout] = useState(false);

  return (
    <div className="App">
        <header className="App-header">
        {(checkout === true) 
          ? <div className="payment-div">
            <PayPal />
          </div> 

          :<div>
            <h1>PayPal Integration Page</h1>
            <button onClick={() => {setCheckout(true)}} className="btn-checkout">Checkout</button>
          </div>
        }
      </header>
    </div>
  )
}

export default App