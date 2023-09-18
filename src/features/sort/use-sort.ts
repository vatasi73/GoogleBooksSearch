import { useState, useEffect } from "react";
import { useAppDispatch } from "../../store";
import { setCategory, setSort } from "./sort-slice";
import { useSelector } from "react-redux";
import { selectCategory, selectSort } from "./sort-selector";
import { useBooks } from "../books/use-books";

export const useDropDownSelect = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [_, startFetch] = useBooks();
  const dispatch = useAppDispatch();
  const category = useSelector(selectCategory);
  const sort = useSelector(selectSort);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCategorySelect = (category: string) => {
    dispatch(setCategory(category));
    handleClose();
  };
  const handleSortSelect = (sort: string) => {
    dispatch(setSort(sort));

    handleClose();
  };
  useEffect(() => {
    startFetch();
    // eslint-disable-next-line
  }, [dispatch, sort, category]);

  return {
    anchorEl,
    category,
    sort,
    open,
    handleClick,
    handleClose,
    handleCategorySelect,
    handleSortSelect,
    selectedOption,
    setSelectedOption,
  };
};
