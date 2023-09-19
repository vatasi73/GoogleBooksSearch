import { RootState } from "../../store";

export const selectLoadNewPage = (state: RootState) => state.loadMore.loadMore;
export const selectIsFirstLoad = (state: RootState) => state.loadMore.firstLoad;
