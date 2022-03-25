import React from 'react';
import './Checkout.css';
import Header from '../header/Header';
import Banner from '../../images/amazon-prime.jpg';
import Subtotal from '../subtotal/Subtotal';
import { useStateValue } from '../StateProvider';
import CheckoutProduct from '../checkoutProduct/CheckoutProduct';
import TopBar from '../topbar/topBar';

export default function Checkout(){
    const [{basket}, dispatch] = useStateValue();
    return(
        <>
        <TopBar />
        <Header />
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' src={Banner} alt='' />

                <div>
                    <h2 className='checkout__title'>Your shopping Basket</h2>

                    {
                        basket?.map((item, index) => (
                            <CheckoutProduct key={index} id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating}/>
                        ))
                    }

                </div>

            </div>

            <div className='checkout__right'>
                <Subtotal />
            </div>

        </div>
        </>
    )
}