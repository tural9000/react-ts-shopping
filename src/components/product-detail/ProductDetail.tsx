import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { IPRODUCT } from "../../models/products";
import ImageGallery from "react-image-gallery";
import { useCardContext } from "../../context-api/basket-context/BasketContext";

function ProductDetail() {
  const [product, setProduct] = useState<IPRODUCT>();
  const [state, , addToCard] = useCardContext();
  const {product_id} = useParams();
 
  
  const findProduct = state.find((item) => item.id === product?.id);

  useEffect(() => {
    let isApiSubscribed = true;
    (async () => {
      await axios.get(`http://localhost:8000/products/${product_id}`).then((res) => {
        if (isApiSubscribed) {
          setProduct(res.data);
        }
      });
    })();
    return () => {
      isApiSubscribed = false;
    };
  }, []);
  return (
    <div className="row container" style={{ width: "100%" }}>
      <div className="col-sm-6 col-12">
        <div className="m-auto" style={{ width: "50%" }}>
          {product?.images && <ImageGallery items={product.images} />}
        </div>
      </div>
      <div className="col-sm-6 col-12 mt-sm-0 mt-5">
        <h3> {product?.title} </h3>
        <i> {product?.description} </i>
        <hr />
        <button
          className={`${findProduct ? "btn btn-danger" : "btn btn-primary"}`}
          onClick={() => {product && addToCard(product, findProduct)}}
        >
          {findProduct ? "Remove Basket" : "Add to basket"}
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
