import React, { useState} from 'react';
import Header from '../header/Header';
import TopBar from '../topbar/topBar';
import Footer from '../footer/footer';

import Map_View from '../../images/mappreview.jpg'

export default function Contact(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [comments, setComments] = useState('')

    const submit = () =>{}
 
    return(
        <>
        <div className='contact'>
            <div className='container'>
                <div className="container mx-3 py-3">
                    <div className="title-container">
                            <h3>CONTACT INFORMATION</h3>
                            <p> 
                            <strong>ADDRESS</strong> <br/>
                            Office Number 04 <br/>
                            52 Loop Stree, CBD <br/>
                            Mosque Plaza ( opposite Post office ) <br/>
                            Rustenburg 0299
                            <br/><br/> 
                            <strong>PHONE</strong> <br/>
                            072 1287 255
                            <br/><br/>
                            <strong>EMAIL</strong> <br/>
                            support@preinfinitysolutions.co.za<br/>
                            sales@preinfinitysolutions.co.za
                            </p>
                    </div>
                    <div className="extra-image">
                        <img src={Map_View} alt='map view'/>
                    </div>
                </div>
            </div>
        </div>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdCkGvD4jJWAbCa5h_3prlagLidARyhtFyUnuGnEqXeXJjl2Q/viewform?embedded=true" width="640" height="812" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </>
    )
}