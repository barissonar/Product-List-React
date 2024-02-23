import { Card } from "../Card";
import { useEffect } from "react";
import { useProducts } from "../../Context/ProductsContext";
function ProductList() {
    
    const {products, setProducts}  = useProducts();

    const getProducts = async () => {
        try {
          const response = await fetch('https://fakestoreapi.com/products');
          const products = await response.json();
          setProducts(products);
        } catch (error) {
          console.error('Hata oluştu:', error.message);
        }
      }

    useEffect(()=> {
        getProducts();
      },[])   
    
    console.log(products);  
    
    return (
    <>  
    
       {
        
        products.map((item) => (<Card key={item.id} img={item.image} title={item.title} price={item.price} productid={item.id}>

        </Card>))
        
       }
     
    </>  
    );
  }
  
export {ProductList};