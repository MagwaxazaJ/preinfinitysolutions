import React from "react";
import './Product.css';
import { useStateValue } from "../StateProvider";
import {Card,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Product({id, title, price, image}){
    // const [{basket,product}, dispatch] = useStateValue();

    const addToBasket = () => {
        //dispatch the item to the DataLayer
        // dispatch({
        //     type: 'ADD_TO_BASKET',
        //     item: {
        //         id: id,
        //         title: title,
        //         image: image,
        //         price: price,
        //     }
        // })
    }

    const viewInfor = () => {
        //dispatch the item to the DataLayer
        // console.log('Working Up')
        // dispatch({
        //     type: 'PRODUCT_INFOR',
        //     item: {
        //         id: id,
        //         title: title,
        //         image: image,
        //         price: price,
        //     }
        // })
     
    }

    return(
        <div className="category">
            {/* <img src={image} alt="Category" />
            <h4>{title}</h4>
            <p>{description}</p> */}
        </div>
    )
}
