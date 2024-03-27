import { Container } from "react-bootstrap";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import CartItem from "../Components/CartItem";

function CheckOut() {
  const { showCloseCart, showCart, cartItems } = useContext(CartContext);
  let amount = cartItems
    .reduce((amount, item) => item.price * item.quantity + amount, 0)
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <Container>
      {showCart && (
        <Container className="cart__wrapper">
          <div style={{ textAlign: "right" }}>
            <IoMdCloseCircleOutline
              onClick={showCloseCart}
              style={{ cursor: "pointer" }}
            ></IoMdCloseCircleOutline>
          </div>
          <div className="cart__innerWrapper d-flex justify-content-center">
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
          <div className="Cart__cartTotal d-flex justify-content-center">
            <div>Cart Total:</div>
            <div style={{ marginLeft: 5, marginBottom: 10, gap: 5 }}>
              {"$" + amount}
            </div>
          </div>
        </Container>
      )}
    </Container>
  );
}
export default CheckOut;
