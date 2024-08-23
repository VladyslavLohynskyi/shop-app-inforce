interface ISize {
   width: number;
   height: number;
}

interface IComment {
   id: number;
   productId: number;
   description: string;
   date: string;
}

export interface IProduct {
   id: number;
   imgUrl: string;
   name: string;
   count: 4;
   size: ISize;
   weight: string;
   comments: IComment[];
}
