/* import { Button, Card } from "react-bootstrap"; */
import product from "../data";
import ProductCard from "../Components/ProductCard";

function Cameras() {
  return (
    <div className="container d-md-flex">
      <div className="Cameras">
        {product.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
export default Cameras;
