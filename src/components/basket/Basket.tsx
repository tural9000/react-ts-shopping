import React from 'react'
import ClearIcon from "@mui/icons-material/Clear";
import { useCardContext } from '../../context-api/basket-context/BasketContext';
import { IPRODUCT } from '../../models/products';

interface IPROPS {
    product: IPRODUCT;
    key: number
}
const Basket: React.FC<IPROPS> = ({product , key}) => {
    const [, , , removeProductFromCard, , totalSumProducts] = useCardContext();

    const handleChangePrice = (product: IPRODUCT, target: EventTarget & HTMLInputElement) => {
        totalSumProducts && totalSumProducts(product, +target.value);
      };

      const removeProductClick = (product: IPRODUCT) => {
        removeProductFromCard && removeProductFromCard(product);
      };
  return (
    <div className="row border-bottom border-primary py-4" >
    <div className="col-sm-3 col-6 mt-sm-0 mt-5">
      <img
        src={product.image}
        className="imgR"
        style={{ width: "150px", height: "150px" }
         }
      />
    </div>

    <div className="col-sm-3 col-6 mt-sm-0 mt-5">
      <h5>Məhsul</h5>
      <p>{product.title}</p>
    </div>

    <div className="col-sm-2 col-4 mt-sm-0 mt-5 ">
      <h5> Miqdar </h5>
      <p className="position-relative pt-25">
        <input
          type="number"
          className="position-absolute form-control"
          style={{ width: "100%" }}
          name={`product${key}`}
          defaultValue={product.quantity}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            handleChangePrice(product, e.target);
          }}
        />
      </p>
    </div>

    <div className="col-sm-2 col-4 mt-sm-0 mt-5 ">
      <h5>Qiymət</h5>
      <p>{product.price} AZN</p>
    </div>
    <div className="col-sm-2 col-4 pt-4 mt-sm-0 mt-3">
      <button
        className="btn btn-danger p-1"
        onClick={() => removeProductClick(product)}
      >
        <ClearIcon />
      </button>
    </div>
  </div>
  )
}

export default Basket