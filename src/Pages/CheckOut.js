/* import { Container } from "react-bootstrap"; */
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import CartItem from "../Components/CartItem";




function CheckOut(){
  const { showCloseCart,showCart, cartItems} = useContext(CartContext);
    let amount = cartItems.reduce((amount, item) => item.price + amount, 0);
    return(
        <div className="container">
            {showCart && (
          <div className="cart__wrapper d-flex justify-content-center" style={{width: "50vw"}}>
            <div style={{ textAlign: "right" }}>
            <IoMdCloseCircleOutline onClick={showCloseCart} style={{cursor: "pointor", background:"gray"}}></IoMdCloseCircleOutline>
            </div>
            <div className='cart__innerWrapper'>
              {cartItems.length === 0 ? (
                <h4>Cart is Empty</h4>
              ) : (
                <div className="ul">
                  {cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
              )}
            </div>
            <div className='Cart__cartTotal'>
              <div>Cart Total:</div>
              <div style={{ marginLeft: 5, marginBottom:10, gap:5 }}>
                {
                  "$" + amount
                }
              </div>
            </div>
          </div>
        )}
        </div>
    )
}
export default CheckOut;