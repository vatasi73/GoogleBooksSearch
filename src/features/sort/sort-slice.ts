import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CategorySlice = {
  category: string;
  sort: string;
};

const initialState: CategorySlice = {
  category: "",
  sort: "newest",
};

const categorySlice = createSlice({
  name: "@@category",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
  },
});

export const { setCategory, setSort } = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;
