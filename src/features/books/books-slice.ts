import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Status, Extra, Items } from "../../types";

export const loadBooks = createAsyncThunk<
  Items,
  {
    search: string;
    sort: string;
    category: string;
    loadMore: number;
  },
  {
    state: { books: BooksSlice };
    extra: Extra;
    rejectValue: string;
  }
>(
  "@@books/load-books",
  async (
    { search, sort, category, loadMore },
    { extra: { client, api }, rejectWithValue }
  ) => {
    try {
      const response = await client.get(
        api.ALL_BOOKS(search, sort, category, loadMore)
      );
      return response.data;
    } catch (error) {
      if (error instanceof Error) return rejectWithValue(error.message);
      return rejectWithValue("Some Error");
    }
  },
  {
    condition: (_, { getState }) => {
      const {
        books: { status },
      } = getState();
      return status !== "loading";
    },
  }
);

type BooksSlice = {
  status: Status;
  error: string | null;
  list: Items | undefined;
};

const initialState: BooksSlice = {
  status: "idle",
  error: null,
  list: undefined,
};

const booksSlice = createSlice({
  name: "@@books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadBooks.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadBooks.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload ?? "Can not Load data";
      })
      .addCase(loadBooks.fulfilled, (state, action) => {
        state.status = "received";
        state.list = action.payload;
      });
  },
});

export const booksReducer = booksSlice.reducer;
