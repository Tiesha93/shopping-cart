import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import {SHOW_CLOSE_CART, ADD_TO_CART, REMOVE_ITEM} from "../Types";


const CartState = ({children}) => {
    const initalState = {
        showCart:true,
        cartItems: [],
    };

const [state, dispatch] = useReducer(CartReducer, initalState);

const addToCart = (item) => {
    dispatch({type: ADD_TO_CART, payload: item})
};

const showCloseCart = () => {
    dispatch({type: SHOW_CLOSE_CART});
};

const removeItem = (id) =>  {
    dispatch({type: REMOVE_ITEM, payload: id});
};

    return (
        <CartContext.Provider value = {{
            showCart: state.showCart,
            cartItems: state.cartItems,
            addToCart,
            showCloseCart,
            removeItem
        }}>
        {children}
        </CartContext.Provider>
    );
};

export default CartState;