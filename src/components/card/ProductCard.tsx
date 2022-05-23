import { useEffect, useState } from "react";


import { XLink } from "../../shared/x-lib/components/XLink";
import XInput from "../../shared/x-lib/components/XInput";
import { Modal } from "../modal/Modal";
import { useCardContext } from "../../context-api/basket-context/BasketContext";
import Basket from "../basket/Basket";
import { isEmail, isPhone } from "../../validations/validation";


interface IERROR {
  errorUserName?: string;
  city?: string;
  email?: string;
  phone?: string;
}
interface IORDER {
  username: string;
  city: string;
  email: string;
  phone: string;
}
const ProductCard = () => {
  const [state, , , , ,] = useCardContext();
  const [reducerSum, setReducerSum] = useState(0);
  const [toggle, setToggle] = useState<boolean>(false);
  const [error, setError] = useState<IERROR>();
  const [disable , setDisable] = useState(false)
  const [order, setOrder] = useState<IORDER>({
    username: "",
    city: "",
    email: "",
    phone: "",
  });

  //
 
 
  const onValidateUserInfo = (target: EventTarget & HTMLInputElement) => {
    const { name, value } = target;

    if (name === "username") {
      if (value.length > 0 && value.length < 4) {
        return setError({
          ...error,
          errorUserName: "istifadeci adi dord karakterden chox olmalidi",
        });
      }
      if (value === "") {
        return setError({
          ...error,
          errorUserName: "Zəhmət olmazsa adiniz daxil edin",
        });
      } else {
        setError({ ...error, errorUserName: undefined });
      }
    }

    if (name === "city") {
      if (value === "") {
        return setError({ ...error, city: "Zəhmət olmazsa Şəhər daxil edin" });
      } else {
        setError({ ...error, city: undefined });
      }
      setOrder({ ...order, city: value });
    }

    if (name === "email") {
      if (!isEmail(value)) {
        console.log(value);
        
        return setError({
          ...error,
          email: "Zəhmət olmazsa email adressini duzgun daxil edin",
        });
      }

      if (value === "") {
        return setError({
          ...error,
          email: "Zəhmət olmazsa emailinizi daxil edin",
        });
      }

     else {
        setError({ ...error, email: undefined });
      }
    }

    if (name === "phone") {
      const pattern = "[0-9][0-9]{9}";
      if (value === "") {
        return setError({
          ...error,
          phone: "Zəhmət olmazsa nomrenizi daxil edin",
        });
      }

      if (!isPhone(value)) {
        return setError({
          ...error,
          phone: "Zəhmət olmazsa nomrenizi duzgun daxil edin",
        });
      } else {
        setError({ ...error, phone: undefined });
        setOrder({ ...order, phone: value });
      }
    }
    if(order.username && order.city && order.email && order.phone){
     // const disable = !(order.username && order.city && order.email && order.phone)
      setDisable(false)
      console.log(disable);
    }
  };

 
  
  const toggleModal = () => {
    setToggle(!toggle);
  };

  const closeModal = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    setReducerSum(
      state.reduce((sum, product) => sum + product.price * product.quantity, 0)
    );
  }, [state]);

  if (state.length === 0) {
    return (
      <div className="container mt-5 alert alert-primary" role="alert">
        Sebet Bosdur <XLink to="/">Ana səhifəyə geri dön</XLink>
      </div>
    );
  }
  return (
    <div className="container mt-2">
      <h1 className="mb-2 pt-100"> Alışveriş Səbətiniz </h1>
      <div className="row">
        <div className="col-sm-10 col-12 ">
          <div className="col-lg-8 col-md-12 ">
            {state.map((product, i) => (
              <Basket product={product} key={i} />
            ))}
          </div>
        </div>
        <div className="col-sm-2 col-12">
          <div> Ümumi Məbləğ : {reducerSum.toFixed(2)}</div>
          <Modal
            title="sifaris et"
            cancelButtonText="Iptal et"
            successButtonText="Sifaris et"
            openModal={toggleModal}
            closeModal={closeModal}
            toggle={toggle}
            disable = {disable}
            header={
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  sifaris et
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={toggleModal}
                ></button>
              </div>
            }
            body={
              <div className="modal-body">

                <XInput
                  name="username"
                  placeholder="adinizi daxil edin"
                  value={order.username}
                  onBlur={(e: React.FocusEvent<HTMLInputElement>) => { onValidateUserInfo(e.target) }}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => { onValidateUserInfo(e.target) }}
                  errorMessage={error?.errorUserName}
                />

                <XInput
                  name="city"
                  placeholder="sheheri daxil edin"
                  value={order.city}
                  onBlur={(e: React.FocusEvent<HTMLInputElement>) => { onValidateUserInfo(e.target) }}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => { onValidateUserInfo(e.target) }}
                  errorMessage={error?.city}
                />

                <XInput
                  name="email"
                  placeholder="emailinizi daxil edin"
                  value={order.email}
                  onBlur={(e: React.FocusEvent<HTMLInputElement>) => { onValidateUserInfo(e.target) }}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => { onValidateUserInfo(e.target) }}
                  errorMessage={error?.email}
                />

                 <XInput
                  name="phone"
                  placeholder="nomrenizi daxil edin"
                  type = "text"
                  value={order.phone}
                  onBlur={(e: React.FocusEvent<HTMLInputElement>) => { onValidateUserInfo(e.target) }}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => { onValidateUserInfo(e.target) }}
                  errorMessage={error?.phone}
                />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
