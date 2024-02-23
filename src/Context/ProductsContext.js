import { createContext, useState, useContext } from "react";

const ProductsContext = createContext();

export const ProductsProvider = ({children}) => {

    const [products, setProducts] = useState([]);
    
    const values = {
       products,
       setProducts
    };
    

    return (
        <ProductsContext.Provider value={values}>
            {children}
        </ProductsContext.Provider>
    );

};

export const useProducts = () => useContext(ProductsContext);