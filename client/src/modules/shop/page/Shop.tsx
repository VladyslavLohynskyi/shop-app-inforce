import React, { useState } from 'react';
import './Shop.scss';
import { IProduct } from '../../../utils/interfaces';
import { Product } from '../components/Product';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { Button } from '../../ui/Button';
import { ButtonClassEnum } from '../../../utils/enums';
import { Modal } from '../../Modal/page';
import { AddNewProduct } from '../../Modal/components/AddNewProduct';

export const Shop: React.FC = () => {
   const { products } = useAppSelector((state) => state.productsReducer);
   const [isAddModalOpened, setIsAddModalOpened] = useState<boolean>(false);
   const handleClickAddButton = () => {
      setIsAddModalOpened(true);
   };
   const handleAddCloseModal = () => {
      setIsAddModalOpened(false);
   };
   return (
      <>
         <div className='shop-page max-width'>
            <div>
               <Button
                  onClick={handleClickAddButton}
                  buttonClass={ButtonClassEnum.ADD}
                  text='Add'
               />
            </div>
            {products.map((product) => (
               <Product key={product.id} product={product} />
            ))}
         </div>
         <Modal isModalOpen={isAddModalOpened} onClose={handleAddCloseModal}>
            <AddNewProduct onClose={handleAddCloseModal} />
         </Modal>
      </>
   );
};
