import CartContext from "../context/cart/CartContext";
import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import product from "../data";


function ProductCard({product}){
  const {addToCart} = useContext(CartContext)
    return(
        <div className= "ProductCard">
            <div class="row g-3">
                <div calss="col md-4">
                     <Card style={{ width: '18rem' }}>
                         <Card.Img variant="top" src={product.image} />
                         <Card.Body>
                             <Card.Title>{product.name}</Card.Title>
                             <Card.Text>{"$" + product.price}</Card.Text>
                             <Button onClick={()=> addToCart(product)}>Add to cart</Button>
                         </Card.Body>
                     </Card>
                </div>
            </div>
        </div>
    );
}
console.log(product);


export default ProductCard;