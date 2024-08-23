import { IProduct } from '../../../utils/interfaces';
import { AppDispatch } from '../../store';
import { productsSlice } from './productsSlice';

export const getAllProducts = () => (dispatch: AppDispatch) => {
   dispatch(productsSlice.actions.getProducts());
};

export const addProduct = (product: IProduct) => (dispatch: AppDispatch) => {
   dispatch(productsSlice.actions.addProduct(product));
};
