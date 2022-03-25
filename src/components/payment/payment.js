import React, { useEffect, useState } from 'react';
import './payment.css';
// import { Link, useHistory} from 'react-router-dom';
import Header from '../header/Header';
import TopBar from '../topbar/topBar';
import Footer from '../footer/footer';
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import CheckoutProduct from '../checkoutProduct/CheckoutProduct';
import CurrencyFormat from "react-currency-format";
// import { cardElement, useStripe, useElements} from '@stripe/react-stripe-js';
// import axios from '../../axios';
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
  
export default function Payment(){
    const [{basket,product}, dispatch] = useStateValue();
    // const history = useHistory();

    // const stripe = useStripe();
    // const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generate special stripe secret
        // sub currency unit( * 100)
        // const getClientSecret = async () => {
        //     const response = await axios({
        //         method: 'post',
        //         url: `/payments/create?total=${getBasketTotal(basket) * 100}`
        //     })
        //     setClientSecret(response.data.clientSecret)
        // }

        // getClientSecret();
    },[basket])

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        // const payload = await stripe.confirmCardPayment(clientSecret, {
        //     payment_method: {
        //         card: ElementInternals.getElement(CardElement)
        //     }
        // }).then(({ paymentIntent }) => {
        //     //paymentIntent (payment confirmation)
        //     setSucceeded(true);
        //     setError(null);
        //     setProcessing(false);

        //     // history.replace('/products')
        // })
    }

    const handleChange = event => {
        //listen for changes in the cardElement
        //display error if there is an error
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return(
        <div className='payment'>
            <TopBar />
            <Header />
            <div className='payment__container'>
                {/* payment section delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>magwaxaza66@gmail.com</p>
                        <p>Khayakhulu</p>
                        <p>Khayelisha Section 10399</p>
                    </div>
                </div>

                {/* payment section Review items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review Items</h3>
                    </div>
                    <div className='payment__items'>
                        {
                            basket?.map((item, index) => (
                                <CheckoutProduct key={index} id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating}/>
                            ))
                        }
                    </div>
                </div>

                {/* payment section Payment method */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        <form onSubmit={handleSubmit}>
                            {/* <CardElement onChange={handleChange}/> */}
                            {/* <PayPalScriptProvider options={{ "client-id": "test" }}>
                                <PayPalButtons style={{ layout: "horizontal" }} />
                            </PayPalScriptProvider> */}

                            <div className='payment__priceContainer'>
                                <CurrencyFormat 
                                    renderText={ (value) =>(
                                        <h3>Order Total: {value}</h3>
                                       
                                    ) }
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'R'}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p>: "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>} 
                        </form>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}