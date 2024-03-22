import { SHOW_CLOSE_CART, ADD_TO_CART, REMOVE_ITEM } from "../Types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case SHOW_CLOSE_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }

    case ADD_TO_CART: {
      let newItem = action.payload;
      const isItemInCart = state.cartItems.find(
        (cartItem) => cartItem.id === newItem.id
      );
      if (isItemInCart) {
        isItemInCart.quantity = isItemInCart.quantity + 1;
        return {
          ...state,
          cartItems: [...state.cartItems],
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
        };
      }
    }

    case REMOVE_ITEM: {
      //create variable itemToRemove set it to action.payload
      // create variable isItemInCart just like in add Cart
      //if isItemInCart.quantity === 1 then return what is below
      let itemToRemove = action.payload;
      const isItemInCart = state.cartItems.find(
        (cartItem) => cartItem.id === itemToRemove.id
      );
      if (isItemInCart.quantity === 1) {
        //if isItemInCart.quantity === 1
        //delete
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item.id !== itemToRemove.id //itemToRemove.id
          ),
        };
      } else {
        isItemInCart.quantity = isItemInCart.quantity - 1;
        return {
          ...state,
          cartItems: [...state.cartItems],
        };
      }
      //else isItemInCart.quantity - 1 and return what is below
    }

    default:
      return state;
  }
};

export default CartReducer;
