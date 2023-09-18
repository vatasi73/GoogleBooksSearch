import { selectLoadNewPage } from "../loadMore/loadMoreSelector";
import { useAppDispatch } from "../../store";
import { useSelector } from "react-redux";
import { setLoadNewPage } from "./loadMore-slice";
import { useBooks } from "../books/use-books";

export const useLoadMore = () => {
  const dispatch = useAppDispatch();
  const loadMore = useSelector(selectLoadNewPage);
  const [_, startFetch] = useBooks();
  const handleLoadMoreClick = () => {
    dispatch(setLoadNewPage(loadMore + 30));
    startFetch();
  };

  return [handleLoadMoreClick];
};
