import { useState, useEffect } from "react";
import { ChangeEventHandler } from "react";

import { useAppDispatch } from "../../store";
import { setSearch } from "./search-slice";
import { useBooks } from "../books/use-books";
import { useSelector } from "react-redux";
import { selectSearch } from "./searchSelector";
import { setClearLoadMore, setIsFirstLoad } from "../loadMore/loadMore-slice";

type OnSearch = ChangeEventHandler<HTMLInputElement>;

export const useSearch = (): [string, OnSearch, () => void, () => void] => {
  const [, startFetch] = useBooks();
  const dispatch = useAppDispatch();
  const search = useSelector(selectSearch);
  const handleClickSearch = () => {
    startFetch();
    dispatch(setClearLoadMore());
    dispatch(setIsFirstLoad(false));
  };

  const handleSearch: OnSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  const useKeyPress = (targetKey: string): boolean => {
    const [keyPressed, setKeyPressed] = useState(false);

    const downHandler = ({ key }: KeyboardEvent) => {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    };

    const upHandler = ({ key }: KeyboardEvent) => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    };

    useEffect(() => {
      window.addEventListener("keydown", downHandler);
      window.addEventListener("keyup", upHandler);

      return () => {
        window.removeEventListener("keydown", downHandler);
        window.removeEventListener("keyup", upHandler);
      };
      // eslint-disable-next-line
    }, []);

    return keyPressed;
  };
  const isEnterPressed = useKeyPress("Enter");

  const handleKey = () => {
    if (isEnterPressed) {
      handleClickSearch();
    }
  };
  return [search, handleSearch, handleClickSearch, handleKey];
};
