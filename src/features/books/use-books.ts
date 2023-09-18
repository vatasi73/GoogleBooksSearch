import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../store";
import { Items } from "../../types";
import { selectAllBooks } from "./books-selectors";

import { loadBooks } from "./books-slice";

import { selectSearch } from "../search/searchSelector";
import { selectCategory, selectSort } from "../sort/sort-selector";
import { selectLoadNewPage } from "../loadMore/loadMoreSelector";
import { setLoadNewPage } from "../loadMore/loadMore-slice";

export const useBooks = (): [Items[], () => void] => {
  const [updateBooks, setUpdateBooks] = useState();

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
    if (!books?.items) {
      return;
    }
    if (!loadMore) {
      setUpdateBooks(() => books?.items);
      return;
    }
    setUpdateBooks((prevupdatebooks) => {
      const updatedArray = prevupdatebooks.filter(
        (item) => !books.items.includes(item)
      );
      return [...updatedArray, ...books?.items];
    });
  }, [books, search, sort, category, loadMore]);
  console.log(books, "Books");
  return [updateBooks, startFetch];
};
