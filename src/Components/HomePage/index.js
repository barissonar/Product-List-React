import { ProductList } from "./ProductList";
import { ToastContainer } from 'react-toastify';
import { useEffect } from "react";

function HomePage() {
    useEffect(()=> {
        document.title = "E-commerce App";
    },[])
    return (
    <>    
    <header className='header'><h1>Products</h1></header> 
    
    <section className='container'>
     
        <ProductList/>
        <ToastContainer/>
      
    </section>

    </>  
    );
  }
  
  export {HomePage};

