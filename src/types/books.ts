// export interface VolumeInfo {
//   title: string;
//   authors?: string[];
//   description?: string;
//   categories?: string[];
//   imageLinks?: {
//     smallThumbnail?: string;
//     thumbnail?: string;
//   };
// }

// export interface BookItem {
//   id: string;
//   volumeInfo: VolumeInfo;
//   totalItems: number;
// }

export type ImageLinks = {
  smallThumbnail?: string;
  thumbnail?: string;
};
export type VolumeInfo = {
  title: string;
  authors?: string[];
  description?: string;
  categories?: string[];
  imageLinks?: ImageLinks;
};

export type BooksResponse = {
  id: string;
  volumeInfo: VolumeInfo;
};
export type Items = {
  items: BooksResponse[];
  totalItems: number;
};
