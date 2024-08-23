import React from 'react';
import './Shop.scss';
import { IProduct } from '../../../utils/interfaces';
import { Product } from '../components/Product';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { Button } from '../../ui/Button';
import { ButtonClassEnum } from '../../../utils/enums';

export const Shop: React.FC = () => {
   const { products } = useAppSelector((state) => state.productsReducer);
   return (
      <div className='shop-page max-width'>
         <div>
            <Button buttonClass={ButtonClassEnum.ADD} text='Add' />
         </div>
         {products.map((product) => (
            <Product key={product.id} product={product} />
         ))}
      </div>
   );
};
