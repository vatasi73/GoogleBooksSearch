import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../store";
import { BooksResponse } from "../../types";
import { selectAllBooks } from "./books-selectors";

import { loadBooks } from "./books-slice";

import { selectSearch } from "../search/searchSelector";
import { selectCategory, selectSort } from "../sort/sort-selector";
import { selectLoadNewPage } from "../loadMore/loadMoreSelector";

export const useBooks = (): [BooksResponse[] | undefined, () => void] => {
  const [updateBooks, setUpdateBooks] = useState<BooksResponse[] | undefined>(
    undefined
  );

  const dispatch = useAppDispatch();
  const search = useSelector(selectSearch);

  const sort = useSelector(selectSort);
  const category = useSelector(selectCategory);

  const loadMore = useSelector(selectLoadNewPage);
  const books = useSelector(selectAllBooks);

  const startFetch = () => {
    if (search !== "") {
      dispatch(loadBooks({ search, sort, category, loadMore }));
    }
  };

  useEffect(() => {
    if (!books || !books.items) {
      return;
    }
    if (!loadMore) {
      setUpdateBooks(() => books?.items);
      return;
    }
    setUpdateBooks((prevupdatebooks) => {
      if (prevupdatebooks === undefined) {
        return [];
      }

      const updatedArray = prevupdatebooks.filter(
        (item) => !books?.items.includes(item)
      );
      return [...updatedArray, ...books.items];
    });
  }, [books, search, sort, category, loadMore]);

  return [updateBooks, startFetch];
};
