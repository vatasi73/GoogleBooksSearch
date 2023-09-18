import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type loadMore = {
  loadMore: number;
  count: number;
};

const initialState: loadMore = {
  loadMore: 0,
  count: 0,
};

const loadMoreSlice = createSlice({
  name: "@@loadMore",
  initialState,
  reducers: {
    setLoadNewPage: (state, action: PayloadAction<number>) => {
      state.loadMore = action.payload;
    },
    setCountPage: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    setClearSearch: () => initialState,
  },
});

export const { setLoadNewPage, setClearSearch, setCountPage } =
  loadMoreSlice.actions;
export const loadMoreReducer = loadMoreSlice.reducer;
