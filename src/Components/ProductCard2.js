import CartContext from "../context/cart/CartContext";
import { useContext } from "react";
import { Card, Button } from "react-bootstrap";

function ProductCard2({ product }) {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="ProductCard2 d-inline-flex ms-4 pb-4">
      <Card style={{ width: "25rem" }}>
        <Card.Img style={{ width: "100%" }} variant="top" src={product.image} />
        <Card.Body>
          <Card.Title className="text-dark d-flex justify-content-center fw-bold">
            {product.name}
          </Card.Title>
          <Card.Text className="d-flex justify-content-center">
            {"$" + product.price}
          </Card.Text>
          <Button onClick={() => addToCart(product)}>Add to cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard2;
