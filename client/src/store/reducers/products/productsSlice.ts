import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../../utils/interfaces';
import { initialData } from '../../../utils/data';

interface IProductsState {
   products: IProduct[];
}

const initialState: IProductsState = {
   products: [],
};

export const productsSlice = createSlice({
   name: 'products',
   initialState,
   reducers: {
      getProducts(state) {
         const data: IProduct[] = JSON.parse(
            localStorage.getItem('products') || '[]',
         );
         if (data.length === 0) {
            localStorage.setItem('products', JSON.stringify(initialData));
            state.products = initialData;
         } else {
            state.products = data;
         }
      },

      addProduct(state, action: PayloadAction<IProduct>) {
         state.products = [...state.products, action.payload];
         localStorage.setItem('products', JSON.stringify(state.products));
      },
   },
});

export default productsSlice.reducer;
