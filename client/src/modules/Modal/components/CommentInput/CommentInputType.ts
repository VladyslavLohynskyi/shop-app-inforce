import { IComment } from '../../../../utils/interfaces';

export interface CommentInputType {
   onDescriptionChange: (text: string) => void;
   onDateChange: (text: string) => void;
   comment: IComment;
}
