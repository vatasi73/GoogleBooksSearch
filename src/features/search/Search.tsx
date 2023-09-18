import SearchIcon from "@mui/icons-material/Search";
import {
  SearchIconWrapper,
  StyledInputBase,
  SearchInput,
  SearchWrapper,
} from "./SearchStyled";
import { useSearch } from "./use-search";

import SubmitButton from "../../componets/Button/Button";

const Search = () => {
  const [search, handleSearch, handleClickSearch, handleKey] = useSearch();

  return (
    <>
      <SearchWrapper>
        <SearchInput>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            onChange={handleSearch}
            onKeyPress={handleKey}
            value={search}
          />
        </SearchInput>
        <SubmitButton text="Search" Click={handleClickSearch} />
      </SearchWrapper>
    </>
  );
};

export default Search;
