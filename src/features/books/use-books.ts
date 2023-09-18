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
  const handleLoadMoreClick = () => {
    dispatch(setLoadNewPage(loadMore + 30));
    console.log("LOADM");
  };
  useEffect(() => {
    if (!books?.items) {
      return;
    }
    if (!loadMore) {
      setUpdateBooks(() => books?.items);
      return;
    }
    setUpdateBooks([...updateBooks, ...books?.items]);
  }, [books, search, sort, category, loadMore]);

  return [updateBooks, startFetch, handleLoadMoreClick];
};
