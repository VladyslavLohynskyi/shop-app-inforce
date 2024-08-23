import React from 'react';
import './Shop.scss';
import { IProduct } from '../../../utils/interfaces';
import { Product } from '../components/Product';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';

export const Shop: React.FC = () => {
   const { products } = useAppSelector((state) => state.productsReducer);
   return (
      <div className='shop-page max-width'>
         {products.map((product) => (
            <Product key={product.id} product={product} />
         ))}
      </div>
   );
};
