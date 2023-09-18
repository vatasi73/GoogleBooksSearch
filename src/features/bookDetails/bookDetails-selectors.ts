import { RootState } from "../../store";

export const selectBookDetails = (state: RootState) => state.bookDetails.list;
