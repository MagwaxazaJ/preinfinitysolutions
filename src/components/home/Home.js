import React from 'react';
import './Home.css';
import Banner from '../../images/Homed.jpg';
import Product from '../product/Product';
import Header from '../header/Header';
import TopBar from '../topbar/topBar';
import Footer from '../footer/footer';
import Slide from '../slide/slide';

// images
import SLIDE__1 from '../../images/home de.jpg';
import SLIDE__2 from '../../images/home de.png';
import SLIDE__3 from '../../images/table1_800_faded.jpg';

const slideImages = [
    {
      url: SLIDE__1,
    },
    {
      url: SLIDE__2,
    },
    {
      url: SLIDE__3,
    },
  ];
 

export default function Home(){
    return(
        <div className='home'>
            <TopBar email="sales@preinfinitysolutions.co.za"/>
             <Header />
            <div className='home__container'>
                <img src={Banner} alt='' className='home__image' />
                
                <div className='home__infor'>
                    <div className='home__infor__text'>
                        <h1>WELCOME</h1>
                        <p>Dear customer welcome to PRE INFINITY SOLUTIONS. We provide infinity solution for all our customers it might be business/office/personal computer. we bring innovation systems and commucation. We proved a solution that keep all our customer happy and smiling.  We kindly request you to visit our store or contact us whenever you have problems with your computer /laptop /printer and others</p>
                        <button>contact/Direction</button>
                    </div>
                    <div className='home__infor__image'>
                     <Slide />  
                    </div>
                   
                </div>

                

            </div>

            <Footer />
        </div>
    )
}