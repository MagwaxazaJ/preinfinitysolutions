import React from 'react';
import Header from '../header/Header';
import TopBar from '../topbar/topBar';
import Footer from '../footer/footer';

 
export default function About(){
    return(
        <div className="about-container mx-3 py-3">
        <div className="container">
            <div className="title-container">
            <h2>ABOUT</h2>
            <p>In a state of ever-growing and rapidly evolving market for information technology and system integration, recognizing the need of a company that can offer high quality and take the lead on the South African market, Aubrey Mogale a highly qualified engineer and programmer founded the "Leading Computer Company ' 26 April 2019. In April 2019 the company established its office in Rustenburg and started its activities with the sale of computer equipment, information and telecommunication services in South Africa.</p>
            </div>
            <div className="categories">

                <div className="category" >
                    <h4>Vision</h4>
                    <p>To see innovation in office and home sector and help our client to connect and communicate simple. To bring security to our client and the world at large.  is strategic approach to managing information technology (IT) departments and functions within business environments.</p>
                </div>

                <div className="category" >
                    <h4>Mission</h4>
                    <p>Is to give our client infinity solutions. To make a better future for all, is to provide a leadership role in support of academic excellence, administrative decision-making and operational effectiveness by Developing and maintaining superior communications and computing infrastructure</p>
                </div>

                <div className="category" >
                    <h4>Goals</h4>
                    <p>Is to reach to world with a sample and manageable System. We grow daily and so we wish to see our clients growing due to the solutions that we provide and advice we give. Is to bring support to all clients</p>
                </div>

            </div>
        </div>
        </div>
    )
}