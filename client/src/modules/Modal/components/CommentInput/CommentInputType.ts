import { IComment } from '../../../../utils/interfaces';

export interface CommentInputType {
   onDescriptionChange: () => void;
   onDateChange: () => void;
   comment: IComment;
}
