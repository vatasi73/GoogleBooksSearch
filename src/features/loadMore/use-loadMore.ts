import { selectLoadNewPage } from "../loadMore/loadMoreSelector";
import { useAppDispatch } from "../../store";
import { useSelector } from "react-redux";
import { setLoadNewPage } from "./loadMore-slice";
import { useBooks } from "../books/use-books";
import { useEffect } from "react";

export const useLoadMore = () => {
  const dispatch = useAppDispatch();
  const loadMore = useSelector(selectLoadNewPage);
  const [_, startFetch] = useBooks();

  const handleLoadMoreClick = () => {
    dispatch(setLoadNewPage(loadMore + 30));
  };
  useEffect(() => {
    startFetch();
  }, [dispatch, loadMore]);
  return [handleLoadMoreClick];
};
