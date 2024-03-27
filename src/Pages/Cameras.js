import product from "../data";
import ProductCard from "../Components/ProductCard";

function Cameras() {
  return (
    <div className="Cameras d-flex flex-row flex-wrap">
      {product.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
export default Cameras;
