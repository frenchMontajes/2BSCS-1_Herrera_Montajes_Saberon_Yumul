export type BookType = {
  title: string;
  isbn: string;
  picturebook: string;
  publication_year: number;
  author_id: number;
  genre_id: number;
  publisher_id: number;
  book_id: number
  price: number;
}

export type CheckType = {
  book_id: number;
  books: BookType;
  created_at: string;
  id: number;
  user_id: string;
}