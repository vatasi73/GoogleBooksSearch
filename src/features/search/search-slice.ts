import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SearchSlice = {
  search: string;
};

const initialState: SearchSlice = {
  search: "",
};

const searchSlice = createSlice({
  name: "@@search",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setClearSearch: () => initialState,
  },
});

export const { setSearch, setClearSearch } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
