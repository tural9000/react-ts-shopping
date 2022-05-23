import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useCardContext } from "../../context-api/basket-context/BasketContext";

import { IPRODUCT} from "../../models/products"
import productStyle from "./productStyle.module.scss"

interface Props {
    product: IPRODUCT
}

const Product:React.FC<Props> = (props) => {
  const {t} = useTranslation();
  const {product} = props;
  const [ state, , addToCard ] = useCardContext();
  const navigate = useNavigate();
  
  const findProduct = state.find(item => item.id === product.id);
  
  return (
    <div className="card" style={{width: "18rem"}} >
        <img src={product.image} className={`card-img-top img-thumbnail ${productStyle.img}`} alt="..."/>
        <div className="card-body">
            <h5 className={`card-title ${productStyle.h5}`} onClick={() => navigate(`product/${product.id}`)}> {product.title.substring(0,20)} </h5>
            <p className="card-text">{product.description.substring(0,80)}</p>
            <button 
                className={`${findProduct ? 'btn btn-danger' : 'btn btn-primary'  }`}
                onClick={()=> addToCard(product, findProduct) }>
                    {findProduct ? t("Remove Basket") : t("Add to basket")}
            </button>
        </div>
    </div>
  )
}

export default Product