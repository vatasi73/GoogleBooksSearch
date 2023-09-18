import { RootState } from "../../store";

export const selectAllBooks = (state: RootState) => state.books.list;

export const selectBooksInfo = (state: RootState) => ({
  status: state.books.status,
  error: state.books.error,
});
