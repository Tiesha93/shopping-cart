import product2 from "../data2";
import ProductCard2 from "../Components/ProductCard2";




function Lenses () {
    return(
        <div className="container d-md-flex">
        <div className="Lenses">
            {product2.map((product)=>(<ProductCard2 key={product.id} product={product}/>))}
        </div>
        </div>
    )
}

export default Lenses;