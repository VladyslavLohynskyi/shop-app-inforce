import { AppDispatch } from '../../store';
import { productsSlice } from './productsSlice';

export const getAllProducts = () => async (dispatch: AppDispatch) => {
   dispatch(productsSlice.actions.getProducts());
};
