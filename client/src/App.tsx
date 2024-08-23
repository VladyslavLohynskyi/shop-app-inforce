import { useEffect } from 'react';
import './App.scss';
import { useAppDispatch } from './hooks/redux';
import { Shop } from './modules/shop/page';
import { getAllProducts } from './store/reducers/products/productsActionCreators';

function App() {
   const dispatch = useAppDispatch();
   useEffect(() => {
      dispatch(getAllProducts());
   }, []);
   return (
      <div className='app'>
         <Shop />
      </div>
   );
}

export default App;
