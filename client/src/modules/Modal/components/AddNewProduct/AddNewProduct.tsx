import React, { useState } from 'react';
import { AddNewProductType } from './AddNewProductType';
import { useAppDispatch } from '../../../../hooks/redux';
import { Button } from '../../../ui/Button';
import {
   ButtonClassEnum,
   ProductCommentKeyEnum,
} from '../../../../utils/enums';
import { Input } from '../../../ui/Input';
import { IComment } from '../../../../utils/interfaces';
import { CommentInput } from '../CommentInput';

export const AddNewProduct: React.FC<AddNewProductType> = ({ onClose }) => {
   const dispatch = useAppDispatch();

   const [name, setName] = useState<string>('');
   const [imageUrl, setImageUrl] = useState<string>('');
   const [count, setCount] = useState<number>(1);
   const [width, setWidth] = useState<number>(1);
   const [height, setHeight] = useState<number>(1);
   const [weight, setWeight] = useState<number>(1);
   const [comments, setComments] = useState<IComment[]>([]);
   const handleSubmit = async () => {};

   const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
   };
   const handleChangeImageUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
      setImageUrl(e.target.value);
   };

   const handleChangeCount = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCount(+e.target.value);
   };

   const handleChangeWidth = (e: React.ChangeEvent<HTMLInputElement>) => {
      setWidth(+e.target.value);
   };

   const handleChangeHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHeight(+e.target.value);
   };

   const handleChangeWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
      setWeight(+e.target.value);
   };

   const addComment = () => {
      setComments((prev) => {
         return [
            ...prev,
            {
               description: '',
               date: '',
               id: Date.now(),
               productId: Date.now(),
            },
         ];
      });
   };

   const handleChangeComment = (
      key: ProductCommentKeyEnum,
      value: string,
      id: number,
   ) => {
      setComments((prev) => {
         return prev.map((comment) =>
            comment.id === id
               ? {
                    ...comment,
                    [key]: value,
                 }
               : comment,
         );
      });
   };

   return (
      <div className='modal-container'>
         <form
            onSubmit={(e) => {
               e.preventDefault();
            }}
         >
            <label>
               Name
               <Input
                  type='text'
                  value={name}
                  placeholder='Enter Name'
                  onChange={handleChangeName}
                  required={true}
               />
            </label>

            <label>
               Image Url
               <Input
                  type='text'
                  value={imageUrl}
                  placeholder='Enter Image Url'
                  onChange={handleChangeImageUrl}
                  required={true}
               />
            </label>

            <label>
               Count
               <Input
                  type='number'
                  value={count}
                  min={1}
                  placeholder='Enter Count'
                  onChange={handleChangeCount}
               />
            </label>

            <label>
               Width
               <Input
                  type='number'
                  value={width}
                  min={1}
                  placeholder='Enter Width'
                  onChange={handleChangeWidth}
               />
            </label>

            <label>
               Height
               <Input
                  type='number'
                  value={height}
                  min={1}
                  placeholder='Enter Height'
                  onChange={handleChangeHeight}
               />
            </label>
            <label>
               Weight (grams)
               <Input
                  type='number'
                  value={weight}
                  min={1}
                  placeholder='Enter Weight in grams'
                  onChange={handleChangeWeight}
               />
            </label>
            <Button
               buttonClass={ButtonClassEnum.ADD}
               onClick={(e) => {
                  e.preventDefault();
                  addComment();
               }}
               text='Add Comment'
            />
            <div>
               {comments.map((comment) => (
                  <CommentInput
                     key={comment.id}
                     onDescriptionChange={() =>
                        handleChangeComment(
                           ProductCommentKeyEnum.DESCRIPTION,
                           comment.description,
                           comment.id,
                        )
                     }
                     onDateChange={() =>
                        handleChangeComment(
                           ProductCommentKeyEnum.DATE,
                           comment.description,
                           comment.id,
                        )
                     }
                     comment={comment}
                  />
               ))}
            </div>

            <Button
               buttonClass={ButtonClassEnum.DELETE}
               onClick={(e) => {
                  e.preventDefault();
                  onClose();
               }}
               text='Cancel'
            />
            <Button
               buttonClass={ButtonClassEnum.ADD}
               onClick={handleSubmit}
               text='Add'
            />
         </form>
      </div>
   );
};
