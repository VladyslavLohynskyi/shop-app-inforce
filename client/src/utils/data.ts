import { IProduct } from './interfaces';

export const initialData: IProduct[] = [
   {
      id: 1,
      imageUrl:
         'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png',
      name: 'Nike',
      count: 4,
      size: {
         width: 200,
         height: 200,
      },
      weight: '200g',
      comments: [
         {
            id: 3,
            productId: 1,
            description: 'some text here',
            date: '14:00 22.08.2021',
         },
      ],
   },
   {
      id: 2,
      imageUrl:
         'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png',
      name: 'Puma',
      count: 4,
      size: {
         width: 200,
         height: 200,
      },
      weight: '200g',
      comments: [
         {
            id: 3,
            productId: 1,
            description: 'some text here',
            date: '14:00 22.08.2021',
         },
      ],
   },
   {
      id: 3,
      imageUrl:
         'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png',
      name: 'Nike',
      count: 4,
      size: {
         width: 200,
         height: 200,
      },
      weight: '200g',
      comments: [
         {
            id: 3,
            productId: 1,
            description: 'some text here',
            date: '14:00 22.08.2021',
         },
      ],
   },
   {
      id: 4,
      imageUrl:
         'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png',
      name: 'Puma',
      count: 4,
      size: {
         width: 200,
         height: 200,
      },
      weight: '200g',
      comments: [
         {
            id: 3,
            productId: 1,
            description: 'some text here',
            date: '14:00 22.08.2021',
         },
      ],
   },
];
