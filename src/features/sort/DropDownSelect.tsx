import { MenuItem, Menu } from "@mui/material";
import { useDropDownSelect } from "./use-sort";
import { SelectButton } from "./DropDownSelectStyle";

const categories = [
  "all",
  "art",
  "biography",
  "computers",
  "history",
  "medical",
  "poetry",
];
const sorting = ["relevance", "newest"];
type DropDownSelectProps = {
  props: string;
};
const DropDownSelect = (props: DropDownSelectProps) => {
  const {
    anchorEl,
    open,
    handleClick,
    handleClose,
    handleCategorySelect,
    handleSortSelect,
    selectedOption,
    setSelectedOption,
  } = useDropDownSelect();

  const options = props.props === "Category" ? categories : sorting;

  return (
    <>
      <SelectButton
        variant="contained"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {props.props === "Category" ? "Category" : "Sorting"}
        {selectedOption && `: ${selectedOption}`}
      </SelectButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {options.map((item, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              if (props.props === "Sorting") {
                handleSortSelect(item);
              }
              if (props.props === "Category") {
                handleCategorySelect(item);
              }
              setSelectedOption(item);
              handleClose();
            }}
          >
            {item}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default DropDownSelect;
