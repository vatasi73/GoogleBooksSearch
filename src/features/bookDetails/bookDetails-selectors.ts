import { RootState } from "../../store";

export const selectBookDetails = (state: RootState) => state.bookDetails.list;
export const selectBookDetailsInfo = (state: RootState) => ({
  status: state.bookDetails.status,
  error: state.bookDetails.error,
});
