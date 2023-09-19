import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type loadMore = {
  loadMore: number;
  firstLoad: boolean;
};

const initialState: loadMore = {
  loadMore: 0,
  firstLoad: false,
};

const loadMoreSlice = createSlice({
  name: "@@loadMore",
  initialState,
  reducers: {
    setLoadNewPage: (state, action: PayloadAction<number>) => {
      state.loadMore = action.payload;
    },
    setIsFirstLoad: (state, action) => {
      state.firstLoad = action.payload;
    },

    setClearLoadMore: () => initialState,
  },
});

export const { setLoadNewPage, setIsFirstLoad, setClearLoadMore } =
  loadMoreSlice.actions;
export const loadMoreReducer = loadMoreSlice.reducer;
