import React from 'react';
import './Product.scss';
import { ProductType } from './ProductType';

export const Product: React.FC<ProductType> = ({ product }) => {
   return (
      <div className='product'>
         <div className='product__image-container'>
            <img src={product.imageUrl} alt='product' />
         </div>
         <div className='product__description-container'>
            <h3>{product.name}</h3>
            <p>Count: {product.count}</p>
            <div>
               <p>Height: {product.size.height}</p>
               <p>Width: {product.size.width}</p>
            </div>
            <p>Weight: {product.weight}</p>
            <div className='product__comments'>
               <h4>Comments:</h4>
               {product.comments.map((comment) => (
                  <div key={comment.id}>
                     <p>{comment.description}</p>
                     <p>{comment.date}</p>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};
