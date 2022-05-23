import axios from "axios";
import { useEffect, useState } from "react";
import { IPRODUCT } from "../../models/products";
import Product from "../product/Product";

const Products = () => {
  const [products , setProducts] = useState<IPRODUCT[]>([]);

  useEffect(() => {
    (async ()=> {
      await axios.get("http://localhost:8000/products").then(res=> {
        setProducts(state => [...state, ...res.data]);        
      });
    })();
  }, []);
  
  return (
   <>
   <div className="row container m-auto" >
    { products && products.map((product , i )=> 
         <div className="col-sm-3 col-12 mb-2" key={i}>
            <Product  product={product}/> 
         </div> 
    )} </div>
   </>
  )
}

export default Products