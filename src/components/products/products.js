import React from 'react';
import './products.css';
import Banner from '../../images/Homed.jpg';
import Product from '../product/Product';
import Header from '../header/Header';
import TopBar from '../topbar/topBar';
import Footer from '../footer/footer';
import ProductInfor from './productInfor';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// images
import Printer from '../../images/90327833f83246749de8a1e627070a61_MF643Cdw_front_OTH.png';
import POS from '../../images/kisspng-point-of-sale-sales-business-retail-cash-register-pos-terminal-5ae9bfe7a8d295.1077340415252684556915.png';
import WIFI_ROUTER from '../../images/f076f5ae-5808-4488-8b70-9fe94e0e8bc9.jpg';
import DESKTOP from '../../images/Desktop-PC-Transparent-PNG.png';
import ETHERNET_CABLE from '../../images/20m-ethernet-network-patch-cable-cat5e-pc-to-hub-lan-cable-loveu-1203-23-Loveu@8.jpg';
import USB from '../../images/kisspng-usb-flash-drive-sandisk-cruzer-flash-memory-data-s-sandisk-usb-flash-pen-drive-5a72323bb6f9f6.4650207515174334037495.png';
import KEYBOARD from '../../images/PikPng.com_mouse-pointer-png_549722.png';
import CAMERA from '../../images/toppng.com-hik-camera-hikvision-cctv-camera-693x402.png';
import CHARGER from '../../images/pngaaa.com-880381.png';
import BATTERY from '../../images/pngfind.com-acer-laptop-png-6436872.png';
import HuaweiB525 from '../../images/HuaweiB525.png';
import CANON_PRINTER from '../../images/imageclass-mf244dw-b1.png';
import LAPTOP from '../../images/desktop-laptop-gamers.png';
import HARD_DISK_DRIVE from '../../images/Hard-Disk-Drive-PNG-Free-Download.png';
import SCREEN_DISPLAY from '../../images/lcd.jpg';

 
const data = [
    {
        id: 1,
        title: 'Printer',
        price: 5000,
        image: Printer
    },
    {
        id: 2,
        title: 'Point of Sale With Software',
        price: 9000,
        image: POS
    },
    {
        id: 3,
        title: 'WIFI Router B535',
        price: 1600,
        image: WIFI_ROUTER
    },
    {
        id: 4,
        title: 'Desktop Full Set',
        price: 3500,
        image: DESKTOP
    },
    {
        id: 5,
        title: 'Ethernet Cable per meter',
        price: 20,
        image: ETHERNET_CABLE
    },
    {
        id: 6,
        title: 'Canon Printer',
        price: 3000,
        image: CANON_PRINTER
    },
    {
        id: 7,
        title: 'Wireless Keyboard',
        price: 300,
        image: KEYBOARD
    },
    {
        id: 8,
        title: 'CCTV 4 Channel',
        price: 2200,
        image: CAMERA
    },
    {
        id: 9,
        title: 'CCTV 8 Channel',
        price: 3500,
        image: CAMERA
    },
    {
        id: 10,
        title: 'CCTV 16 Channel',
        price: 5000,
        image: CAMERA
    },
    {
        id: 11,
        title: 'Charger',
        price: 900,
        image: CHARGER
    },
    {
        id: 12,
        title: 'Battery',
        price: 900,
        image: BATTERY
    },
    {
        id: 13,
        title: 'Laptop',
        price: 3500,
        image: LAPTOP
    },
    {
        id: 14,
        title: 'HDD 500GB',
        price: 650,
        image: HARD_DISK_DRIVE
    },
    {
        id: 15,
        title: 'USB 16GB',
        price: 150,
        image: USB
    },
    {
        id: 16,
        title: 'USB 32GB',
        price: 250,
        image:  USB
    },
    {
        id: 17,
        title: 'Huawei B525',
        price: 1500,
        image: HuaweiB525
    },
    {
        id: 18,
        title: 'USB 8GB',
        price: 120,
        image: USB
    },
]

export default function Products(){
    return(
        <div className="categories-container mx-3 py-3">
        <div className="container">
            <div className="title-container">
            <h2>Products</h2>
            </div>
            <div className="categories">
            {data.map(({ image, title, price }, index) => {
                return (
                <div className="category" key={index}>
                    <img src={image} alt="Category" width={100}/>
                    <h4>{title}</h4>
                    <p>R {price}</p>
                </div>
                );
            })}
            </div>
        </div>
        </div>
    )
}