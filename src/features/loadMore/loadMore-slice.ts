import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type loadMore = {
  loadMore: number;
};

const initialState: loadMore = {
  loadMore: 0,
};

const loadMoreSlice = createSlice({
  name: "@@loadMore",
  initialState,
  reducers: {
    setLoadNewPage: (state, action: PayloadAction<number>) => {
      state.loadMore = action.payload;
    },

    setClearLoadMore: () => initialState,
  },
});

export const { setLoadNewPage, setClearLoadMore } = loadMoreSlice.actions;
export const loadMoreReducer = loadMoreSlice.reducer;
