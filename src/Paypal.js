import React, { useState, useEffect, useRef } from 'react';

export default function Paypal() {
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(null);
	const payPalRef = useRef();

	useEffect( ()=> {
		window.paypal
		.Buttons({
			createOrder: (data, actions) => {
				return actions.order.create({
					purchase_units: [{
						amount: {
							currency_code: "USD",
              value: 0.50,
						}
					}]
				})
			},
			onApprove: async (data,actions) => {
				const order = await actions.order.capture();
				setSuccess(true);
				console.log(order);
			},
			onError: (err) => {
				setError(err);
				console.log(err);
			}
		})
		.render(payPalRef?.current)
	},[]);

	if(success) {
		return <div>Payment Successful.</div>
	}
	if(error) {
		return <div>Something went wrong, please try later</div>
	}
	return (
    <div>
      <h4>Total Amount 0.50 USD</h4>
      <div ref={payPalRef} />
    </div>
  );
}
