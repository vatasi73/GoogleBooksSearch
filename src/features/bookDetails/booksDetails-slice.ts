import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Status, Extra, VolumeInfo } from "../../types";

export const loadBookDetails = createAsyncThunk<
  VolumeInfo[],
  string,
  {
    state: { books: BooksDetailsSlice };
    extra: Extra;
    rejectValue: string;
  }
>(
  "@@bookDetails/load-bookDetails",
  async (id, { extra: { client, api }, rejectWithValue }) => {
    try {
      const response = await client.get(api.DETAILS_BOOK(id));
      return response.data.volumeInfo;
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

type BooksDetailsSlice = {
  status: Status;
  error: string | null;
  list: null | VolumeInfo[];
};

const initialState: BooksDetailsSlice = {
  status: "idle",
  error: null,
  list: null || [],
};

const bookDetailsSlice = createSlice({
  name: "@@bookDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadBookDetails.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadBookDetails.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload ?? "Can not Load data";
      })
      .addCase(loadBookDetails.fulfilled, (state, action) => {
        state.status = "received";
        state.list = action.payload;
      });
  },
});

export const bookDetailsReducer = bookDetailsSlice.reducer;
