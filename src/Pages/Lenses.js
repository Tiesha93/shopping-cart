import product2 from "../data2";
import ProductCard2 from "../Components/ProductCard2";




function Lenses () {
    return(
        <div className="Lenses">
            {product2.map((product)=>(<ProductCard2 key={product.id} product={product}/>))}
        </div>
    )
}

export default Lenses;