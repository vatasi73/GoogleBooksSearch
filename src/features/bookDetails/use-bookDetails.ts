import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import { loadBookDetails } from "./booksDetails-slice";
import { selectBookDetails } from "./bookDetails-selectors";

import { VolumeInfo } from "../../types";

export const useBookDetails = (): VolumeInfo[] => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const bookDetails = useSelector((state: RootState) =>
    selectBookDetails(state)
  );

  useEffect(() => {
    if (id) dispatch(loadBookDetails(id));
  }, [dispatch, id]);

  return [bookDetails];
};
