import { useProducts } from "../../Context/ProductsContext";
import { toast } from 'react-toastify';

function DeleteButton({ productid ,content }) {
    
    const {products}  = useProducts();

    const deleteProduct = (e) => {

      const DeleteId = e.target.getAttribute("delete-id");
      const productIndex = products.findIndex((item) => item.id === parseInt(DeleteId) );
      if (productIndex === -1) {
        console.log("Böyle bir ürün bulunamadı.");
        toast.error("No such product found");
        return false;
      }
      products.splice(productIndex,1);
      const CardDOM = document.getElementById(`${DeleteId}`);
      const ContainerDOM = CardDOM.parentNode;
      ContainerDOM.removeChild(CardDOM);
      toast.success("The product was successfully deleted");
      
    }

    
    return <button delete-id={productid} className="btn delete-btn" onClick={deleteProduct}>{content}</button>

  }

export {DeleteButton};
