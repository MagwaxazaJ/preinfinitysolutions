import Printer from '../images/90327833f83246749de8a1e627070a61_MF643Cdw_front_OTH.png';

export const initialState = {
    basket: [],
    product: {
        title: 'Printer',
        price: 5000.00,
        image: Printer
    },
};

//Selector
export const getBasketTotal = (basket) => basket?.reduce((amout, item) => item.price + amout, 0)

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state, 
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            if(index >= 0){
                newBasket.splice(index, 1)
            }

            return{
                ...state,
                basket: newBasket
            };
        case 'PRODUCT_INFOR':
            return {
                ...state,
                product: action.item
            };
        default:
            return state;
    }
}

export default reducer;