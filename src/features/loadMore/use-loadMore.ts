import { selectLoadNewPage } from "../loadMore/loadMoreSelector";
import { useAppDispatch } from "../../store";
import { useSelector } from "react-redux";
import { setIsFirstLoad, setLoadNewPage } from "./loadMore-slice";
import { useBooks } from "../books/use-books";
import { useEffect } from "react";

export const useLoadMore = () => {
  const dispatch = useAppDispatch();
  const loadMore = useSelector(selectLoadNewPage);
  const [, startFetch] = useBooks();

  const handleLoadMoreClick = () => {
    dispatch(setLoadNewPage(loadMore + 30));
    dispatch(setIsFirstLoad(true));
  };
  useEffect(() => {
    startFetch();
    // eslint-disable-next-line
  }, [dispatch, loadMore]);
  return [handleLoadMoreClick];
};
