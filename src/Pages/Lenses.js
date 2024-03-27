import product2 from "../data2";
import ProductCard2 from "../Components/ProductCard2";

function Lenses() {
  return (
    <div className="Lenses d-md-flex flex-row flex-wrap">
      {product2.map((product) => (
        <ProductCard2 key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Lenses;
