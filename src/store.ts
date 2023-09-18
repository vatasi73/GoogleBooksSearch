import axios from "axios";
import { configureStore } from "@reduxjs/toolkit";

import * as api from "./config";

import { useDispatch } from "react-redux";

import { booksReducer } from "./features/books/books-slice";
import { bookDetailsReducer } from "./features/bookDetails/booksDetails-slice";
import { searchReducer } from "./features/search/search-slice";
import { categoryReducer } from "./features/sort/sort-slice";
import { loadMoreReducer } from "./features/loadMore/loadMore-slice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    bookDetails: bookDetailsReducer,
    search: searchReducer,
    category: categoryReducer,
    loadMore: loadMoreReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
