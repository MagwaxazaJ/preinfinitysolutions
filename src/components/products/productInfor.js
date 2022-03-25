import React from "react";
import './products.css';
import { useStateValue } from "../StateProvider";

export default function ProductInfor(){
    // const [{product, basket}, dispatch] = useStateValue();
    // console.log(product);

    const addToBasket = () => {
        //dispatch the item to the DataLayer
        // dispatch({
        //     type: 'ADD_TO_BASKET',
        //     item: {
        //         id: product.id,
        //         title: product.title,
        //         image: product.image,
        //         price: product.price,
        //     }
        // })
    }

    return(
        <div className='productInfor'>
             {/* <h2>Specifications</h2>
            <div className='productInfor__info'>
                <p>{product?.title}</p>
                <p className='productInfor__price'>
                    <small>R</small>
                    <strong>{product?.price}</strong>
                </p>
            </div>

            <img src={product?.image} alt=''></img>
            <br/> */}
            {/* <button onClick={addToBasket}>Add to Basket</button> */}

        </div>
    )
}