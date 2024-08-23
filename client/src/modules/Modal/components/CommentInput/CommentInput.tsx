import React from 'react';
import './CommentInput.scss';
import { CommentInputType } from './CommentInputType';
import { Input } from '../../../ui/Input';

export const CommentInput: React.FC<CommentInputType> = ({
   comment,
   onDescriptionChange,
   onDateChange,
}) => {
   return (
      <div className='new-comment-form' key={comment.id}>
         <label>
            Description
            <Input
               type='text'
               placeholder='Enter Description'
               onChange={(e) => onDescriptionChange(e.target.value)}
            />
         </label>
         <label>
            Date
            <Input
               type='text'
               placeholder='Enter Date'
               onChange={(e) => onDateChange(e.target.value)}
            />
         </label>
      </div>
   );
};
