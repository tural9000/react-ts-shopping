import React, {createContext, useContext, useEffect, useState} from "react";
import { IPRODUCT } from "../../models/products";

interface IVALUES {
    state: IPRODUCT[];
    setState?: React.Dispatch<React.SetStateAction<IPRODUCT[]>>;
    addToCard?:  (data: IPRODUCT , findElement?: IPRODUCT) => void;
    removeProductFromCard?: (findProduct: IPRODUCT) => void;
    clearBasket?: (data: number[]) => void;
    totalSumProducts?: (product: IPRODUCT, quantity: number) => void
}

export const createBasketContext = createContext<IVALUES>({state: []});

const BasketContextProvider:React.FC<{children? : React.ReactNode}> = ({children}) => {
    const defaultStateValue:IPRODUCT[] = JSON.parse(localStorage.getItem("card") as string) || [];
    const [state , setState] = useState<IPRODUCT[]>(defaultStateValue);
    
    useEffect(()=>{
        localStorage.setItem("basket", JSON.stringify(state));
    },[state]);

    const addToCard = (data: IPRODUCT , findProduct?: IPRODUCT) =>{      
        if(!findProduct){
            setState([data , ...state])
        }
        
        else{
            const filterProduct = state.filter((item:IPRODUCT)=> item.id !== findProduct.id);
            setState(filterProduct) ;   
        }
    } 

    const totalSumProducts = (product: IPRODUCT, quantity: number) => {
        const newProducts = state.map((item)=>{
            if(item.id === product.id){
              item.quantity = quantity
            }
            return item
          });
          setState(newProducts);
    }

    const removeProductFromCard = (findProduct: IPRODUCT) => {
        
        const filterProduct = state.filter((item:IPRODUCT)=> item.id !== findProduct.id);
        setState(filterProduct); 
    }
   
    const clearBasket = (data: number[]) => {
        setState([]);
    }
    const value = {
        state,
        setState,
        addToCard,
        removeProductFromCard,
        clearBasket,
        totalSumProducts 
    }
    return (
        <createBasketContext.Provider value={value} >
            {children}
        </createBasketContext.Provider>
    )
}

export default BasketContextProvider;

export const useCardContext = () => {
    const {state , setState , addToCard , removeProductFromCard ,clearBasket, totalSumProducts} = useContext(createBasketContext);
    if(!state){
        throw new Error("state was called outside of the createBasketContext provider");
    }
    if(!setState){
        throw new Error("setState was called outside of the createBasketContext provider");
    }
    if(!addToCard){
        throw new Error("addToBasket was called outside of the createBasketContext provider");
    }
    if(!clearBasket){
        throw new Error("clearBasket was called outside of the createBasketContext provider");
    }
    return  [state , setState , addToCard, removeProductFromCard, clearBasket,totalSumProducts] as const
}



