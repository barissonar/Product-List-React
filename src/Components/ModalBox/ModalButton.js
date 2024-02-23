import {useState} from 'react';
import Modal from 'react-modal';
import { useProducts } from '../../Context/ProductsContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement(document.getElementById('root'));

function ModalButton({productid}) {
  

  const [modalIsOpen, setIsOpen] = useState(false);
  const {products, setProducts} = useProducts();
  const product = products.find(product => product.id === productid);
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);
  
  
  const saveChanges = () => {
    product.title = title;
    product.price = price;
    product.description = description;
    const cardDOM = document.getElementById(`${product.id}`);
    const cardTitleElement = cardDOM.getElementsByClassName("card-title");
    const cardPriceElement = cardDOM.getElementsByClassName("card-price");
    cardTitleElement[0].innerText = product.title;
    cardPriceElement[0].innerText = product.price;
    toast.success("The product has been updated successfully");
  }
 

  function openModal() {
    setIsOpen(true);
  }



  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <button edit-id={productid} className='btn edit-btn' onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
       // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className='modelcontainer'>
          <div className='modelborder'>
            <label htmlFor='title'>Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} className='text-input' id='title'></input>
            <label htmlFor='textarea'>Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} className='text-area' id='textarea'></textarea>
            <label htmlFor='price'>Price</label>
            <input value={price} onChange={(e) => setPrice(e.target.value)} className='text-input' id='price'></input>
            <div className='modeledit-delete-container'>
              <button className='btnsave' onClick={saveChanges}>Save Changes</button>
              <button className='btnclose' onClick={closeModal}>Close</button>
            </div>
          </div>  
        </div>
      </Modal>
     
    </>
  );
}



export {ModalButton};