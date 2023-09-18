import { RootState } from "../../store";

export const selectCategory = (state: RootState) => state.category.category;
export const selectSort = (state: RootState) => state.category.sort;
