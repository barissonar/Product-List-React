import logo from './logo.svg';
import './App.css';
import { HomePage } from './Components/HomePage';
import { ProductsProvider } from './Context/ProductsContext';

function App() {
  return (
    <div className="App">
    
   <ProductsProvider>

    <HomePage></HomePage>

   </ProductsProvider>
     
    </div>
  );
}

export default App;
