import { RootState } from "../../store";

export const selectLoadNewPage = (state: RootState) => state.loadMore.loadMore;
export const selectCountPage = (state: RootState) => state.loadMore.count;
