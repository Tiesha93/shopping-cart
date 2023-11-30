/* import { Button, Card } from "react-bootstrap"; */
import product from "../data";
import ProductCard from "../Components/ProductCard";


function Cameras (){
    return(
        <div className="Cameras bg-dark">
             {product.map((product)=>(<ProductCard key={product.id} product={product}/>))}
        </div>
    )
}
export default Cameras;